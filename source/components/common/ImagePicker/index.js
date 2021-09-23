import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickerCropper from 'react-native-image-crop-picker';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = forwardRef(({onFileSelect}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.grey} size={17} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelect(images);
          })
          .catch(err => {
            console.log('error in image Selection: >>', err);
          });
      },
    },
    {
      name: 'Take from Gallary',
      icon: <Icon name="image" color={colors.grey} size={17} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelect(images);
          })
          .catch(err => {
            console.log('error in image Selection: >>', err);
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={150}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOptions}
            key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
