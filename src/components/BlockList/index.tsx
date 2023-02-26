import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import NameBlock from '../../components/NameBlock';

const BlockList = (props) => {
  const { data, editOnPress, deleteOnPress, buttonOnPress, type } = props

  return (
    <View style={styles.flatlistView}>
      {data && Object.keys(data).length ? (
        <FlatList
          data={Object.keys(data)}
          renderItem={({ item, index }) => {
            return (
              <NameBlock
                name={data[item].name}
                surname={data[item].surname}
                cellNo={data[item].cell_no}
                email={data[item].email}
                index={index}
                editOnPress={() => editOnPress(item, index)}
                deleteOnPress={() => deleteOnPress(type, item)}
              />
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
      ) :
      <>
        <Text style={styles.nameTextStyle}>No Name Table data avaiable</Text>
        <TouchableOpacity onPress={buttonOnPress} style={styles.button}>
          <Text style={styles.nameTextStyle}>Get name details</Text>
        </TouchableOpacity>
      </>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flatlistView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#3a7bfd',
    height: 50,
    padding: 10,
    borderRadius: 4
  },
  nameTextStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#cacde8'
  }
});

export default BlockList;
