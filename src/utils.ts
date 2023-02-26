import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTableData = async (
  name: string,
  obj: {
    name: string;
    surname: string;
  }
) => {
  const jsonValue = JSON.stringify(obj);
  if (name && jsonValue) {
    try {
      await AsyncStorage.setItem(name, jsonValue);
    } catch (error) {
      console.log('Error storage table data');
    }
  }
};

export const getNameTable = async () => {
  try {
    const data = await AsyncStorage.getItem('nameTable');
    return data;
  } catch (error) {
    console.log('Error getting name table data');
    return {};
  }
};

export const getContactTable = async () => {
  try {
    const data = await AsyncStorage.getItem('contactTable');
    return data;
  } catch (error) {
    console.log('Error getting contact table data');
    return {};
  }
};

export const checkAndSetNameData = async () => {
  try {
    const asyncNameData = await AsyncStorage.getItem('nameTable');

    if (!asyncNameData) {
      const nameTableObject = {
        '1': { name: 'Michael', surname: 'Baker' }
      };

      const jsonValue = JSON.stringify(nameTableObject);
      await AsyncStorage.setItem('nameTable', jsonValue);
    }
  } catch (error) {
    console.log('Error getting and setting name table data');
  }
};

export const checkAndSetContactData = async () => {
  try {
    const asyncContactData = await AsyncStorage.getItem('contactTable');

    if (!asyncContactData) {
      const contactTableObject = {
        '1': { email: 'michael@test.com', cell_no: '0825558364' }
      };

      const jsonValue = JSON.stringify(contactTableObject);
      await AsyncStorage.setItem('contactTable', jsonValue);
    }
  } catch (error) {
    console.log('Error getting and setting contact table data');
  }
};

export const clearContactData = async () => {
  try {
    await AsyncStorage.removeItem('contactTable');
  } catch (error) {
    console.log('Error clearing contact table data');
  }
};

export const clearNameData = async () => {
  try {
    await AsyncStorage.removeItem('nameTable');
  } catch (error) {
    console.log('Error clearing name table data');
  }
};
