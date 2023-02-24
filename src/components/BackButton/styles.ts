import {Platform, StyleSheet} from 'react-native';
import Color from 'color';

export const styles = StyleSheet.create({
  shareItem: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor:
      Platform.OS === 'android'
        ? '#ffffff'
        : Color('#fff').alpha(0.8).toString(),
  },
  backIcon: {
    marginRight: 1,
  },
});
