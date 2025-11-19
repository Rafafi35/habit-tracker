import { StyleSheet, Text, View, } from 'react-native';
import style from '../_style';

const Home = () => {
  return (
    <View style={style.container}>
        <View style={style.habitContainer}>
            <Text style={style.text}>Habit</Text>
        </View>
    </View>
  );
}
export default Home;