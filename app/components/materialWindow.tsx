import { Alert, Button, Pressable, StyleSheet, Text, ScrollView, View } from "react-native";
import { Colors } from "../constants/colors";
export default function MaterialWindow({ header, body, onPress }: { header: string[], body: string[], onPress: () => void }) {
    return (
        <ScrollView style={floatingWindowStyle.container}>
            <Text style={floatingWindowStyle.header}>{header[0]}</Text>
            <Text style={floatingWindowStyle.body}>{body[0]}</Text>
            <Text style={floatingWindowStyle.header}>{header[1]}</Text>
            <Text style={floatingWindowStyle.body}>{body[1]}</Text>
            <Text style={floatingWindowStyle.header}>{header[2]}</Text>
            <Text style={floatingWindowStyle.body}>{body[2]}</Text>
            <Text style={floatingWindowStyle.header}>{header[3]}</Text>
            <Text style={floatingWindowStyle.body}>{body[3]}</Text>
            <Text style={floatingWindowStyle.header}>{header[4]}</Text>
            <Text style={floatingWindowStyle.body}>{body[4]}</Text>
            <Text style={floatingWindowStyle.header}>{header[5]}</Text>
            <Text style={floatingWindowStyle.body}>{body[5]}</Text>
        </ScrollView>
    );
}

const floatingWindowStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 50,
        width: '85%',
        minHeight: '80%',
        position: 'relative',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '3%',
        paddingBottom: "5%",
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
        padding: "2%"
    },
    arrow: {
        color: Colors.text,
        fontSize: 30,
        alignSelf: 'flex-end',
    }
});


