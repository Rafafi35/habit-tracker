import { StyleSheet, Text, View, } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.habitContainer}>
            <Text style={styles.text}>Habit</Text>
        </View>

    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
    container: {
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
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
})