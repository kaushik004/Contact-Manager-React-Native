import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center'
    },

    modalView: {
        backgroundColor: colors.white,
        marginHorizontal: 20,
        minHeight: 300,
        borderRadius: 4
    },

    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 20
    },

    body: {
        minHeight: 300,
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    separator: {
        height: 0.5,
        backgroundColor: colors.grey
    },

    footerItem: {
        width: '100%',
        padding: 10
    },

    footerText: {
        fontSize: 12
    },

    termsView: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: colors.grey
    },

    footer: {
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
        flexDirection: 'row'
    }
});