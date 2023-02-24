import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface textBoxProps {
  name: string;
  color: string;
  onPress: () => void;
}

const TextBox = (props: textBoxProps) => {
  const {name, color,  onPress} = props;

  if (!color || !name) {
    return;
  }

  return (
    <TouchableOpacity
      style={[styles.box, {backgroundColor: color || 'white'}]}
      onPress={onPress}>
      {name ? <Text>{name}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
});
export default TextBox;
