import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routesName';
import styles from './styles';

const RegisterComponet = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Contact Manger</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            placeholderTextColor="grey"
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            placeholderTextColor="grey"
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            placeholderTextColor="grey"
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Username"
            placeholder="Enter Username"
            placeholderTextColor="grey"
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponet;
