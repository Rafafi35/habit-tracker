import {useState} from "react";
import {Pressable, StyleSheet, Text, TextInput, View,} from 'react-native';
import style from '../_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewHabit() {
    const [title, setTitle] = useState('');

    async function saveHabit() {
        if (!title.trim()) return; // Wenn Title leer ist -> Return
        try {
            const storedHabits = await AsyncStorage.getItem('@habits');
            const habits = storedHabits ? JSON.parse(storedHabits) : [];
            const newHabit = {id: Date.now(), title: title.trim()}
            habits.push(newHabit);
            await AsyncStorage.setItem('@habits', JSON.stringify(habits));
            setTitle(''); // Input-Feld leeren
            console.log('All Habits', habits);
        } catch (error) {
            console.warn(error);
        }


    }

    return (
        <View style={style.container}>
            <Text style={style.text}>New Habit</Text>
            <TextInput
                style={style.textInput}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <Pressable style={style.button} onPress={saveHabit}>
                <Text>Create</Text>
            </Pressable>
        </View>
    )
}