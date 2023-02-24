import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../themes/colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  textStyle: any;
}

const Button = (props: ButtonProps) => {
  const { text, onPress, active = false, textStyle } = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: active ? colors.blue : '#ffffff' },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          { color: active ? 'white' : '#000000' },
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.blue,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
  },
});

export default Button;
