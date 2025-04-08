import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function FloatingWindow({ header, body, onPress }: { header: string, body: string, onPress: () => void }) {
    return (
        <Pressable onPress={onPress} style={floatingWindowStyle.container}>
            <Text style={floatingWindowStyle.header}>{header}</Text>
            <Text style={floatingWindowStyle.body}>{body}</Text>
            <FontAwesome name="arrow-right" style={floatingWindowStyle.arrow} />
        </Pressable>
    );
}

const floatingWindowStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 50,
        width: '85%',
        height: '40%',
        position: 'relative',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '3%',
        margin: '5%',
        backgroundColor: Colors.textBackground,
        color: Colors.text
    },
    header: {
        color: Colors.text,
        fontFamily: "CrimsonText-Bold",
        fontSize: 25,
        textDecorationLine: 'underline',

    },
    body: {
        color: Colors.text,
        fontFamily: "CrimsonText-Bold",
        fontSize: 15,
    },
    arrow: {
        color: Colors.text,
        fontSize: 30,
        alignSelf: 'flex-end',
    }
});

