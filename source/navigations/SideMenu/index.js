import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routesName';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from '../../components/common/Icon';
import styles from './styles';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout ?', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel logout');
        }
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch)
        }
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type='material' name='settings' size={17} />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type='material' name='logout' size={17} />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logo.png')}
        />

        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
