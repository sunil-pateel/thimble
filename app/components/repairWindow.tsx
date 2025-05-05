import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import { useCallback, useState } from "react";

export default function RepairWindow({ title, onPress }: { title: string, onPress: () => void }) {
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state: any) => { if (state === "ended") { setPlaying(false); Alert.alert("video has finished playing!"); } }, []);
    const togglePlaying = useCallback(() => { setPlaying((prev) => !prev); }, []);
    return (
        <Pressable onPress={onPress} style={floatingWindowStyle.container}>
            <Text style={floatingWindowStyle.title}>{title}</Text>
            <YoutubePlayer height={40} play={playing} videoId={"dQw4w9WgXcQ"} onChangeState={onStateChange} />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            <FontAwesome name="arrow-right" style={floatingWindowStyle.arrow} />
        </Pressable>
    );
}

const floatingWindowStyle = StyleSheet.create({
    container: {
        borderRadius: 50,
        width: '40%',
        aspectRatio: '1/1',
        position: 'relative',
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
        fontSize: 25,
        textDecorationLine: 'underline',
        textAlign: 'center',

    },
    tutorial: {
        backgroundColor: 'grey',
        aspectRatio: "1/1",
        margin: "5%",
        height: "55%",
    },
    arrow: {
        color: Colors.text,
        fontSize: 20,
        // height: "50%",
        alignSelf: 'flex-end',
    }
});

