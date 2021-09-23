import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routesName';
import Message from '../common/Message';

const LoginComponent = ({
  onSubmit,
  onChange,
  justSignedUp,
  loading,
  form,
  errors,
  error,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Contact Manger</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account Created Successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )}
          {/* Local error when not data connection is not avilable */}
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="Username"
            placeholder="Enter Username"
            placeholderTextColor="grey"
            value={form.userName || null}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            placeholderTextColor="grey"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
