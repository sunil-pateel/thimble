import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from "../../../constants/colors";
import RepairWindow from '../../../components/repairWindow';

export default function Tab() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{
            flex: 1,
            backgroundColor: Colors.darkBackground, // Dark parent

        }}>
            <View style={{
                flexDirection: "row",
                flexWrap: 'wrap',
                minHeight: '100%',
                backgroundColor: Colors.lightBackground, // Green
                borderRadius: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <Text style={styles.header}>Sportswear Repair</Text>
                <RepairWindow title="Leggings" url="w82UNSIYW_c" onPress={() => { }} />
                <RepairWindow title="Lycra" url="xUXuFatFQZE" onPress={() => { }} />
            </View>
        </ScrollView>
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
        fontSize: 40,
        textAlign: 'center',
        width: "100%",
        // margin: "1%",
    }
});

