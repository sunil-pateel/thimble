import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from "../../constants/colors";
import RepairWindow from '../../components/repairWindow';

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
                <Text style={styles.header}>Threading A Needle</Text>
                <RepairWindow title="Left Handed" url="l044_iUGhUA" onPress={() => { }} />
                <RepairWindow title="Right Handed" url="A2V2kXemXQ0" onPress={() => { }} />
                <Text style={styles.header}>Running Stitch</Text>
                <RepairWindow title="Left Handed" url="VVxtDJSetxI" onPress={() => { }} />
                <RepairWindow title="Right Handed" url="BN9paiJphHs" onPress={() => { }} />
                <Text style={styles.header}>Backstitch</Text>
                <RepairWindow title="Left Handed" url="KAcCrMw7F9Q" onPress={() => { }} />
                <RepairWindow title="Right Handed" url="lAN5f23w1Ro" onPress={() => { }} />
                <Text style={styles.header}>Ladder Stitch</Text>
                <RepairWindow title="Left Handed" url="uppbCoxs330" onPress={() => { }} />
                <RepairWindow title="Right Handed" url="hGwT5yUn4bY" onPress={() => { }} />
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

