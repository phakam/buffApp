import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const Header = props => {
  const {text} = props;
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flex: 0.2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    color: "#cacde8",
    fontFamily: 'Montserrat-Regular'
  },
});

export default Header;
