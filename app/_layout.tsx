import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Profile, SettingsCog } from "./components/header";
import { Colors } from "./constants/colors";
import { StatusBar } from "expo-status-bar";


export default function Layout() {
    const [loaded, error] = useFonts({
        'CrimsonText-Regular': require('../assets/fonts/CrimsonText-Regular.ttf'),
        'CrimsonText-Bold': require('../assets/fonts/CrimsonText-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }

    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar
                style="light"
                backgroundColor={"#00000000"}
                translucent={true} // Ensures Android coverage
            />
            <Stack screenOptions={{
                contentStyle: {
                    backgroundColor: Colors.darkBackground
                }
            }}>
                <Stack.Screen name="(tabs)" options={{
                    title: 'Home',
                    headerTitle: "Thimble",
                    headerTitleAlign: 'center',
                    headerLeft: Profile,
                    headerRight: SettingsCog,
                    headerStyle: {
                        backgroundColor: Colors.darkBackground,
                    },
                    headerTitleStyle: {
                        fontFamily: "CrimsonText-Bold",
                        fontSize: 50,
                        color: Colors.textBackground,
                    },
                    navigationBarHidden: true,
                    statusBarHidden: true,
                    headerShown: true
                }} />
            </Stack>
        </>
    )
}
