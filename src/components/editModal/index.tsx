import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal as RNModal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../themes/colors';

import BackButton from '../BackButton';

type SneakerViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const { height, width } = Dimensions.get('screen');

const EditModal = (props: SneakerViewProps) => {
  const {
    isOpen,
    onClose,
    firstField,
    secField,
    onSave,
    firstFieldOnChangeText,
    secFieldOnChangeText,
    selectedTable,
  } = props;

  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setInternalIsOpen(isOpen);
    } else {
      setInternalIsOpen(isOpen);
    }
  }, [isOpen]);

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <RNModal visible={internalIsOpen} transparent animationType="fade">
      <TouchableWithoutFeedback onPressOut={closeModal}>
        <View style={styles.overlayView}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalView]}>
              <View style={styles.closeButtonView}>
                <View style={{ flex: 0.5 }} />
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 15,
                    }}>
                    Update Your Details
                  </Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center' }}>
                  <BackButton onPress={onClose} />
                </View>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  label={`${selectedTable === 'nameTable' ? 'Name' : 'Email'}`}
                  value={firstField}
                  mode="outlined"
                  activeOutlineColor={colors.blue}
                  onChangeText={(text) => firstFieldOnChangeText(text)}
                  style={styles.inputStyle}
                  underlineColor="transparent"
                />
                <TextInput
                  label={`${
                    selectedTable === 'nameTable' ? 'Surname' : 'Cell No.'
                  }`}
                  value={secField}
                  mode="outlined"
                  activeOutlineColor={colors.blue}
                  onChangeText={(text) => secFieldOnChangeText(text)}
                  style={styles.inputStyle}
                  underlineColor="transparent"
                />
              </View>

              <View style={styles.centerView}>
                <TouchableOpacity style={styles.button} onPress={onSave}>
                  <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 15}}>
                    EDIT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#25273c',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '70%',
  },
  flex: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonView: {
    height: 70,
    width: width,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  inputStyle: {
    width: width * 0.7,
  },
  buttonsView: {
    justifyContent: 'center',
  },
  variantView: {
    justifyContent: 'center',
  },
  overlayView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3a7bfd',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    padding: 0,
    borderRadius: 30,
  },
  inputView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageView: {
    height: '90%',
    width: '90%',
  },
  dateView: {
    width: width,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
  textDesc: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    color: 'white',
  },
  brandView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default EditModal;
