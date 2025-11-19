import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Today',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="NewHabit"
                options={{
                    title: 'New Habit',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'add-sharp' : 'add-outline'} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}
