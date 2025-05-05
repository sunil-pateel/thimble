import { View, Text, StyleSheet } from 'react-native';
import { Colors } from "../constants/colors";
import FloatingWindow from "../components/floatingWindow";
import { useRouter } from "expo-router";
import RepairWindow from '../components/repairWindow';

export default function Tab() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.darkBackground, // Dark parent
        }}>
            <View style={{
                flexDirection: "row",
                flexWrap: 'wrap',
                height: '100%',
                backgroundColor: Colors.lightBackground, // Green
                borderRadius: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <Text style={styles.header}>Repair Database</Text>
                <RepairWindow title="oops" onPress={() => { }} />
                <RepairWindow title="oops" onPress={() => { }} />
                <RepairWindow title="oops" onPress={() => { }} />
                <RepairWindow title="oops" onPress={() => { }} />
                <RepairWindow title="oops" onPress={() => { }} />
                <RepairWindow title="oops" onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: 'CrimsonText-Bold',
        color: Colors.textBackground,
        fontSize: 50,
        textAlign: 'center',
        width: "100%",
        margin: "1%",
    }
});

