import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { Profile, SettingsCog } from '../components/header';
import { Colors } from '../constants/colors';
import SewingNeedleIcon from '../components/sewingNeedleIcon';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.textBackground,
            tabBarInactiveTintColor: Colors.lightBackground,
            tabBarActiveBackgroundColor: Colors.darkBackground,
            tabBarInactiveBackgroundColor: Colors.darkBackground,
            tabBarStyle: {borderTopWidth:0}
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }: { color: any }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="walkthrough"
                options={{
                    title: 'Walkthrough',
                    tabBarIcon: ({ color }: { color: any }) => <SewingNeedleIcon color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="repairDatabase"
                options={{
                    title: 'Database',
                    tabBarIcon: ({ color }: { color: any }) => <FontAwesome size={28} name="book" color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
