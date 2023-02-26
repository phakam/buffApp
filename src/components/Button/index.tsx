import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../themes/colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  textStyle: any;
  style: any;
}

const Button = (props: ButtonProps) => {
  const { text, onPress, textStyle, style } = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        style
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
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
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    color: "#ffffff"
  },
});

export default Button;
