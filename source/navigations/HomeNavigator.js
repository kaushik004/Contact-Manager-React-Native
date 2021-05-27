import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CONTACT_LIST, SETTINGS , CREATE_CONTACT, CONTACT_DETAIL} from '../constants/routesName';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import ContactDetail from '../screens/ContactDetail';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;