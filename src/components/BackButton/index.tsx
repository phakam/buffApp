import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface BackButton {
  onPress: () => void;
  iconSize?: number;
  iconName?: string;
  type?: string;
  style?: any;
}

const BackButton = ({
  onPress,
  iconSize = 16,
  style,
}: BackButton): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.shareItem, style]} onPress={onPress}>
      <Icon
        style={styles.backIcon}
        name={'close'}
        size={iconSize}
        color={'#000000'}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
