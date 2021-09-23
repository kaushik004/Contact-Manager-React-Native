import React from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import styles from './styles';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  onChangeText,
  form,
  setForm,
  onSubmit,
  toggleValueChange,
  error,
  loading,
  sheetRef,
  openSheet,
  closeSheet,
  localFile,
	onFileSelect
}) => {
  console.log(`error:>`, error);
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: localFile?.path || DEFAULT_IMAGE_URI}} style={styles.imageView} />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseImage}>Choose Image</Text>
        </TouchableOpacity>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          placeholderTextColor="grey"
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          placeholderTextColor="grey"
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          error={error?.phone_number?.[0]}
          label="Phone Number"
          placeholder="Enter Phone Number"
          placeholderTextColor="grey"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}>Add to Favorites</Text>
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
      <ImagePicker ref={sheetRef} onFileSelect={onFileSelect}/>
    </View>
  );
};

export default CreateContactComponent;
