import {useEffect, useState} from "react";
import {Button, Text, View,} from 'react-native';
import {useFocusEffect} from "expo-router";
import style from '../_style';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [habits, setHabits] = useState([]);

    useFocusEffect(() => {
        readHabits()
    });

    async function readHabits(){
        try {
            const storedHabits = await AsyncStorage.getItem('@habits');
            const habits = storedHabits ? JSON.parse(storedHabits) : [];
            setHabits(habits);
        } catch (error) {
            console.warn(error);
        }
    }

    async function deleteHabit(habitId) {
        try {
            const storedHabits = await AsyncStorage.getItem('@habits');
            const habits = storedHabits ? JSON.parse(storedHabits) : [];
            const updatedHabits = habits.filter(habit => habit.id !== habitId);
            await AsyncStorage.setItem('@habits', JSON.stringify(updatedHabits));
            setHabits(updatedHabits);
            console.log('All Habits', updatedHabits);
        } catch (error) {
            console.warn(error);
        }
    }

  return (
    <View style={style.container}>
        {habits.map(habit => (
            <View style={style.habitContainer} key={habit.id}>
                <Text style={style.text}>{habit.title}</Text>
                <Button title={"D"} onPress={() => deleteHabit(habit.id)}/>
            </View>))}
    </View>
  );
}
export default Home;