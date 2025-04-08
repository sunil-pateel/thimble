import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Profile, SettingsCog } from '../components/header';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerTitle: "Thimble",
                    headerTitleAlign: 'center',
                    headerLeft: Profile,
                    headerRight: SettingsCog,
                    tabBarIcon: ({ color }: { color: any }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }: { color: any }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
