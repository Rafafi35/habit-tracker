import {useEffect, useState} from "react";
import {Button, Pressable, Text, View,} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useFocusEffect} from "expo-router";
import style from '../_style';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [habits, setHabits] = useState([]);
    const [openHabitId, setOpenHabitId] = useState(null);

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

    function toggleHabit(habitId) {
        setOpenHabitId(openHabitId === habitId ? null : habitId);
    }

  return (
    <View style={style.container}>
        {habits.map(habit => (
            <Pressable
                key={habit.id}
                onPress={() => toggleHabit(habit.id)}
                style={openHabitId === habit.id ? style.openHabitContainer : style.habitContainer}
            >
                <Text style={style.text}>{habit.title}</Text>
                <Text style={style.text}>{habit.amount}</Text>
                <Pressable onPress={() => deleteHabit(habit.id)}>
                    <Ionicons name='trash-outline' size={24} color="red" />
                </Pressable>
            </Pressable>))}
    </View>
  );
}
export default Home;