import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, } from 'react-native-reanimated';
import { useCallback, useEffect, useState } from "react";

export default function RepairWindow({ title, url, onPress }: { title: string, url: string, onPress: () => void }) {
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state: any) => { if (state === "ended") { setPlaying(false); Alert.alert("video has finished playing!"); } }, []);
    const togglePlaying = useCallback(() => { setPlaying((prev) => !prev); }, []);


    const [isFocused, setFocus] = useState(true);

    const widthPercent = useSharedValue(40);

    const focusElement = () => {
        if (isFocused) {
            widthPercent.value = 40;
        } else {
            widthPercent.value = 80;
        }

        setFocus(!isFocused);
    }

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    useEffect(() => {
        if (isFocused) {
            widthPercent.value = withTiming(40, config);
        } else {
            widthPercent.value = withTiming(80, config);
        }
    }, [widthPercent.value]);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${widthPercent.value}%`,
        };
    });

    return (
        <AnimatedPressable onPress={focusElement} style={[floatingWindowStyle.container,animatedStyle]}>
            <Text style={floatingWindowStyle.title}>{title}</Text>
            <YoutubePlayer width={"90%"} height={"60%"} play={playing} videoId={url} onChangeState={onStateChange} />
            {!isFocused && <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />}
            <FontAwesome name="arrow-right" style={floatingWindowStyle.arrow} />
        </AnimatedPressable>
    );
}



const floatingWindowStyle = StyleSheet.create({
    container: {
        borderRadius: 50,
        width: '40%',
        aspectRatio: '1/1',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%',
        margin: '5%',
        backgroundColor: Colors.textBackground,
        alignItems: 'center',
        color: Colors.text,

    },
    title: {
        color: Colors.text,
        fontFamily: "CrimsonText-Bold",
        fontSize: 20,
        textDecorationLine: 'underline',
        textAlign: 'center',

    },
    tutorial: {
        backgroundColor: 'grey',
        aspectRatio: "1/1",
        margin: "5%",
        height: "80%",
    },
    arrow: {
        color: Colors.text,
        fontSize: 20,
        // height: "50%",
        alignSelf: 'flex-end',
    }
});

