import React from 'react';
import { Dimensions, StyleSheet, View, Text, Switch } from 'react-native';
import Button from '../Button';
import InputField from '../InputField';
const { width } = Dimensions.get('screen');

const Form = (props) => {
  const {
    buttonOnPress,
    switchValue,
    toggleSwitch,
    firstField,
    secondField,
    setFirstField,
    setSecondField,
    buttonText,
    isNameTable
  } = props;

  return (
    <>
      <View style={styles.topView}>
        <View style={styles.headerButtonsView}>
          <Text style={styles.headerText}>Name Table</Text>
          <Switch
            trackColor={{ false: '#81b0ff', true: '#81b0ff' }}
            ios_backgroundColor="#81b0ff"
            onValueChange={toggleSwitch}
            value={switchValue}
          />
          <Text style={styles.headerText}>Contact Table</Text>
        </View>
        <InputField
          onChangeText={(text) => setFirstField(text)}
          label={`${isNameTable ? 'Name' : 'Email'}`}
          value={firstField}
        />

        <InputField
          onChangeText={(text) => setSecondField(text)}
          label={`${isNameTable ? 'Surname' : 'Cell no.'}`}
          value={secondField}
          maxLength={isNameTable ? null : 10}
        />
      </View>
      <View style={styles.bottomView}>
        <Button text={buttonText} onPress={buttonOnPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161722'
  },
  buttonStyle: {
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  headerButtonsView: {
    height: 50,
    width: width,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  topView: {
    flex: 1,
    justifyContent: 'space-around'
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff'
  }
});

export default Form;
