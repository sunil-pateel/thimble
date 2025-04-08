import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export default function Layout() {
    const [loaded, error] = useFonts({
        'CrimsonText-Regular': require('../assets/fonts/CrimsonText-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
}
