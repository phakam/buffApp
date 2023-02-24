import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { getContactTable, getNameTable, setTableData } from '../../utils';

const { width } = Dimensions.get('screen');

const Capture = () => {
  const [firstField, setFirstField] = useState('');
  const [secondField, setSecondField] = useState('');
  const [isNameTable, setIsNameTable] = useState(false);
  const [nameData, setNameData] = useState({});
  const [contactData, setContactData] = useState({});

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

  const saveDetails = async () => {
    const isTable = isNameTable ? 'contactTable' : 'nameTable';
    if (firstField.length && secondField.length) {
      if (isTable === 'contactTable') {
        const addIndex = Object.keys(contactData).length + 1;
        contactData[addIndex] = {
          email: firstField,
          cell_no: secondField,
        };

        await setTableData(isTable, contactData);
      } else {
        const addIndex = Object.keys(nameData).length + 1;

        nameData[addIndex] = {
          name: firstField,
          surname: secondField,
        };
        await setTableData(isTable, nameData);
      }
      // clearData()
      setFirstField('');
      setSecondField('');
      readData();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.headerButtonsView}>
          <Button
            text={'Name Table'}
            active={isNameTable === false}
            onPress={() => setIsNameTable(false)}
          />
          <Button
            text={'Contact Table'}
            active={isNameTable === true}
            onPress={() => setIsNameTable(true)}
          />
        </View>
        <InputField
          onChangeText={(text) => setFirstField(text)}
          label={`${!isNameTable ? 'Name' : 'Email'}`}
          value={firstField}
        />

        <InputField
          onChangeText={(text) => setSecondField(text)}
          label={`${!isNameTable ? 'Surname' : 'Cell no.'}`}
          value={secondField}
        />
      </View>
      <View style={styles.bottomView}>
        <Button text={'SAVE'} onPress={saveDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161722',
  },
  buttonStyle: {
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  headerButtonsView: {
    height: 100,
    width: width,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  topView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Capture;
