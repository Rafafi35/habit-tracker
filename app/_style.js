import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        height: '80',
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    habitContainer: {
        width: '95%',
        height: '15%',
        borderRadius: 8,
        backgroundColor: '#3e4147',
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#3e4147',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textInput: {
        textAlign: 'center',
        width: '50%',
    }
})