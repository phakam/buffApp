import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../themes/colors';

interface InputFieldProps {
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  maxLength: number;
  keyboardType: string;
}

const { width } = Dimensions.get('screen');

const InputField = (props: InputFieldProps) => {
  const { onChangeText, value, label, maxLength, keyboardType } = props;

  return (
    <TextInput
      label={label}
      value={value}
      mode="flat"
      activeOutlineColor={colors.blue}
      onChangeText={onChangeText}
      style={styles.inputStyle}
      underlineColor="transparent"
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: width * 0.7,
    alignSelf: 'center',
  },
});

export default InputField;
