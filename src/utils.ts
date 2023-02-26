import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTableData = async (
  name: string,
  obj: {
    name: string;
    surname: string;
  },
) => {
  const jsonValue = JSON.stringify(obj);
  if (name && jsonValue) {
    await AsyncStorage.setItem(name, jsonValue);
  }
};

export const getNameTable = async () => {
  const token = await AsyncStorage.getItem('nameTable');

  return token ? JSON.parse(token) : {};
};

export const getContactTable = async () => {
  const token = await AsyncStorage.getItem('contactTable');

  return token ? JSON.parse(token) : {};
};

export const getNameData = async () => {
  const asyncNameData = await AsyncStorage.getItem('nameTable');

  if (!asyncNameData) {
    const nameTableObject = {
      '1': {name: 'Michael', surname: 'Baker'},
    };

    const jsonValue = JSON.stringify(nameTableObject);
    await AsyncStorage.setItem('nameTable', jsonValue);
  }

}

export const checkAndSetNameData = async () => {
  const asyncNameData = await AsyncStorage.getItem('nameTable');

  if (!asyncNameData) {
    const nameTableObject = {
      '1': {name: 'Michael', surname: 'Baker'},
    };

    const jsonValue = JSON.stringify(nameTableObject);
    await AsyncStorage.setItem('nameTable', jsonValue);
  }
}

export const checkAndSetContactData = async () => {
  const asyncContactData = await AsyncStorage.getItem('contactTable');

  if (!asyncContactData) {
    const contactTableObject = {
      '1': {email: 'michael@test.com', cell_no: '0825558364'},
    };

    const jsonValue = JSON.stringify(contactTableObject);
    await AsyncStorage.setItem('contactTable', jsonValue);
  }
}

export const clearContactData = async () => {
  await AsyncStorage.removeItem('contactTable')
};

export const clearNameData = async () => {
  await AsyncStorage.removeItem('nameTable')
};
