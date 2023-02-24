import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('screen');
const NameBlock = props => {
  const {
    onPress,
    name,
    surname,
    index,
    cellNo,
    email,
    deleteOnPress,
    editOnPress,
  } = props;
  return (
    <View onPress={onPress} style={styles.container}>
      <View style={styles.numView}></View>
      <View style={styles.nameView}>
        <Text style={styles.nameTextStyle}>
          {name ? name : email} {surname ? surname : cellNo}
        </Text>
      </View>
      <TouchableOpacity style={styles.numView} onPress={editOnPress}>
        <Text style={{fontFamily: 'Montserrat-Medium', color: '#cacde8'}}>
          EDIT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.numView} onPress={deleteOnPress}>
        <Icon name="trash-can-outline" size={30} color="#cacde8" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width - 20,
    backgroundColor: '#25273c',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 10,
  },
  nameTextStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#cacde8',
  },
  numView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idTextStyle: {
    fontSize: 20,
  },
});

export default NameBlock;
