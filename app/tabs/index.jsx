import {useEffect, useState} from "react";
import { Text, View, } from 'react-native';
import style from '../_style';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        readHabits()
    }, []);
    const readHabits = async () => {
        try {
            const storedHabits = await AsyncStorage.getItem('@habits');
            const habits = storedHabits ? JSON.parse(storedHabits) : [];
            setHabits(habits);
        } catch (error) {
            console.warn(error);
        }
    }

  return (
    <View style={style.container}>
        {habits.map(habit => (
            <View style={style.habitContainer}>
                <Text style={style.text} key={habit.id}>{habit.title}</Text>
            </View>))}
    </View>
  );
}
export default Home;