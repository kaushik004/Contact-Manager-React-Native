import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 10
    },

    item: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    itemText: {
        fontSize: 17,
        paddingVertical: 5,
        paddingLeft: 20
    }
})