import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import EditModal from '../../components/EditModal';
import BlockList from '../../components/BlockList';
import {
  getContactTable,
  getNameTable,
  setTableData,
  clearNameData,
  clearContactData,
  checkAndSetContactData,
  checkAndSetNameData
} from '../../utils';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from '../../themes/colors';

const Display = () => {
  const [nameData, setNameData] = useState({});
  const [contactData, setContactData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [editFirstField, setEditFirstField] = useState('');
  const [editSecField, setEditSecField] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedTable, setSelectedTable] = useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Name Table' },
    { key: 'second', title: 'Contact Table' }
  ]);
  const layout = useWindowDimensions();

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
    }, [])
  );

  useEffect(() => {
    readData();
  }, []);

  const deleteItem = async (name, index) => {
    if (name === 'contactTable') {
      delete contactData[index];

      if (!Object.keys(contactData).length) {
        await clearContactData();
      } else {
        setTableData(name, contactData);
      }
    } else {
      delete nameData[index];

      if (!Object.keys(nameData).length) {
        await clearNameData();
      } else {
        setTableData(name, nameData);
      }
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
          cell_no: editSecField
        };

        await setTableData(header, contactData);
      } else {
        nameData[selectedIndex] = {
          name: editFirstField,
          surname: editSecField
        };
        await setTableData(header, nameData);
      }

      setOpenModal(false);
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

  const setAndGetContactData = async () => {
    await checkAndSetContactData();
    readData();
  };

  const setAndGetNameData = async () => {
    await checkAndSetNameData();
    readData();
  };

  const FirstRoute = () => (
    <BlockList
      data={nameData}
      editOnPress={onNameEdit}
      deleteOnPress={deleteItem}
      type="nameTable"
      buttonOnPress={setAndGetNameData}
    />
  );

  const SecondRoute = () => (
    <BlockList
      data={contactData}
      editOnPress={onContactEdit}
      deleteOnPress={deleteItem}
      type="contactTable"
      buttonOnPress={setAndGetContactData}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text style={styles.tabText}>
                {route.title}
              </Text>
            )}
            indicatorStyle={{ backgroundColor: colors.blue }}
            style={{ backgroundColor: colors.background }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  flex: {
    flex: 1
  },
  flatlistView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameTextStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#cacde8'
  },
  tabText: {
    color: '#cacde8',
    margin: 8,
    fontFamily: 'Montserrat-SemiBold'
  }
});

export default Display;
