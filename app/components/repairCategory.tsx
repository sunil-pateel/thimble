import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function RepairCategory({ text, onPress }: { text: string, onPress: () => void }) {
    return (
        <Pressable onPress={onPress} style={walkthroughButtonStyle.container}>
            <Text style={walkthroughButtonStyle.text}>{text}</Text>
        </Pressable>
    );
}

const walkthroughButtonStyle = StyleSheet.create({
    container: {
        borderRadius: 50,
        width: '85%',
        height: '12%',
        position: 'relative',
        margin: '2%',
        backgroundColor: Colors.textBackground,
        color: Colors.text,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.text,
        fontFamily: "CrimsonText-Bold",
        fontSize: 50,
    }
});

