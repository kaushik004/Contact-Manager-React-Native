import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const getIconFont = (type) => {
    switch (type) {
        case 'material':
            return MaterialIcon;
        case 'fa':
            return FAIcon;
        case 'feather':
            return Feather;
        case 'evil':
            return EvilIcon;
        case 'ant':
            return AntDesign;
        default:
            return FAIcon;
    }
}

const Icon = ({type, ...props}) => {
    const FontIcon = getIconFont(type);

    return <FontIcon {...props} />
}

export default Icon;