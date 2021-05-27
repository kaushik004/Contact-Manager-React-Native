import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 30
    },

    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: '500'
    },

    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '500'
    },

    form: {
        paddingTop: 10
    },

    createSection: {
        flexDirection: 'row'
    },

    infoText: {
        fontSize: 16
    },

    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16
    }
});