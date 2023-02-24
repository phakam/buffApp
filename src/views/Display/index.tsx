import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EditModal from '../../components/editModal';
import Header from '../../components/Header';
import NameBlock from '../../components/NameBlock';
import { getContactTable, getNameTable, setTableData } from '../../utils';

const Display = () => {
  const [nameData, setNameData] = useState({});
  const [contactData, setContactData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [editFirstField, setEditFirstField] = useState('');
  const [editSecField, setEditSecField] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedTable, setSelectedTable] = useState('');

  const readData = async () => {
    const nData = await getNameTable();
    const cData = await getContactTable();

    if (nData) {
      setNameData(nData);
    }
    if (cData) {
      setContactData(cData);
    }
  };

  useFocusEffect(
    useCallback(() => {
      readData();
    }, []),
  );

  useEffect(() => {
    readData();
  }, []);

  const deleteItem = (name, index) => {
    if (name === 'contactTable') {
      delete contactData[index];
      setTableData(name, contactData);
    } else {
      delete nameData[index];
      setTableData(name, nameData);
    }
    readData();
  };

  const updateDetails = (editData, header) => {
    if (header === 'contactTable') {
      setEditFirstField(editData.email);
      setEditSecField(editData.cell_no);
      setOpenModal(true);
    } else {
      if (header === 'nameTable') {
        setEditFirstField(editData.name);
        setEditSecField(editData.surname);
        setOpenModal(true);
      }
    }
  };

  const onSave = async (header) => {
    if (editFirstField.length && editSecField.length) {
      if (header === 'contactTable') {
        contactData[selectedIndex] = {
          email: editFirstField,
          cell_no: editSecField,
        };

        await setTableData(header, contactData);
      } else {
        nameData[selectedIndex] = {
          name: editFirstField,
          surname: editSecField,
        };
        await setTableData(header, nameData);
      }
      // clearData()
      setEditFirstField('');
      setEditSecField('');
      readData();
    }
  };

  const onNameEdit = (item, index) => {
    setSelectedIndex(index + 1);
    setSelectedTable('nameTable');
    updateDetails(nameData[item], 'nameTable');
  };

  const onContactEdit = (item, index) => {
    setSelectedIndex(index + 1);
    setSelectedTable('contactTable');
    updateDetails(contactData[item], 'contactTable');
  };

  return (
    <View style={styles.container}>
      <EditModal
        isOpen={openModal}
        firstField={editFirstField}
        secField={editSecField}
        selectedTable={selectedTable}
        firstFieldOnChangeText={setEditFirstField}
        secFieldOnChangeText={setEditSecField}
        onSave={() => onSave(selectedTable)}
        onClose={() => setOpenModal(false)}
      />
      <View style={styles.flex}>
        {<Header text="Name Table" />}
        <View style={styles.flatlistView}>
          {nameData && Object.keys(nameData).length ? (
            <FlatList
              data={Object.keys(nameData)}
              renderItem={({ item, index }) => {
                return (
                  <NameBlock
                    name={nameData[item].name}
                    surname={nameData[item].surname}
                    index={index}
                    editOnPress={() => onNameEdit(item, index)}
                    onPress={() => deleteItem('nameTable', item)}
                  />
                );
              }}
              keyExtractor={(item, index) => String(index)}
            />
          ) : null}
        </View>
      </View>
      {<Header text="Contact Table" />}
      <View style={styles.flatlistView}>
        {contactData && Object.keys(contactData).length ? (
          <FlatList
            data={Object.keys(contactData)}
            renderItem={({ item, index }) => {
              return (
                <NameBlock
                  cellNo={contactData[item].cell_no}
                  email={contactData[item].email}
                  index={index}
                  editOnPress={() => onContactEdit(item, index)}
                  onPress={() => deleteItem('contactTable', item)}
                />
              );
            }}
            keyExtractor={(item, index) => String(index)}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161722',
  },
  flex: {
    flex: 1,
  },
  flatlistView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Display;
