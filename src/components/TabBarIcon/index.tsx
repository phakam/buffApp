import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBarIcon =
  (icon: string) =>
  ({ color, size }) => {
    // if (icon === 'radio' || icon === 'bag-personal-outline') {
    //   return <MaterialCommunityIcons name={icon} size={size} color={color} />;
    // }
    return icon ? <Icon name={icon} size={size} color={color} /> : null
  };

export default TabBarIcon;
