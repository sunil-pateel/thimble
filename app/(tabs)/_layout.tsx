import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Colors } from '../constants/colors';
import SewingNeedleIcon from '../components/sewingNeedleIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
                    tabBarIcon: ({ color }: { color: any }) => <MaterialCommunityIcons size={28} name="robot" color={color} />,
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
            <Tabs.Screen
                name="repairDatabase/repairs"
                options={{
                    title: "Repairs",
                    tabBarIcon: ({ color }: { color: any }) => <SewingNeedleIcon color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/materials"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/sewingSkills"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/buttonRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/coatsRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/jeanRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/knitwearRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/shoeRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="repairDatabase/repairs/sportswearRepair"
                options={{
                    headerShown: false,
                    href: null,
                }}
            />
        </Tabs>
    );
}
