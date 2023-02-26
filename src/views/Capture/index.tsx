import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Form from '../../components/Form';
import { getContactTable, getNameTable, setTableData } from '../../utils';

const { width } = Dimensions.get('screen');

const Capture = () => {
  const [firstField, setFirstField] = useState('');
  const [secondField, setSecondField] = useState('');
  const [isNameTable, setIsNameTable] = useState(true);
  const [nameData, setNameData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

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
      setFirstField('');
      setSecondField('');
      readData();
    }
  };

  const toggleSwitch = () => {
    setIsNameTable(!isNameTable)
    setIsEnabled(previousState => !previousState);
  }

  return (
    <View style={styles.container}>
      <Form
        switchValue={isEnabled}
        toggleSwitch={toggleSwitch}
        secondField={secondField}
        firstField={firstField}
        setFirstField={setFirstField}
        setSecondField={setSecondField}
        buttonOnPress={saveDetails}
        isNameTable={isNameTable}
        buttonText='SAVE'/>
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
    alignItems: 'center'
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
  headerText : {
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff'
  }
});

export default Capture;
