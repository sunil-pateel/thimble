import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from "../../constants/colors";
import RepairCategory from '../../components/repairCategory';
import { useRouter } from 'expo-router';

export default function Tab() {
    const router = useRouter();
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: Colors.darkBackground, // Dark parent
            }}>
            <View style={{
                flexDirection: "column",
                flexWrap: "wrap",
                minHeight: '100%',
                backgroundColor: Colors.lightBackground, // Green
                borderRadius: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <Text style={styles.header}>Repair Database</Text>
                <RepairCategory text={"Buttons"} onPress={() => { router.replace("/repairDatabase/repairs/buttonRepair") }} />
                <RepairCategory text={"Jeans"} onPress={() => { router.replace("/repairDatabase/repairs/jeanRepair") }} />
                <RepairCategory text={"Shoes"} onPress={() => { router.replace("/repairDatabase/repairs/shoeRepair") }} />
                <RepairCategory text={"Coats/Jackets"} onPress={() => { router.replace("/repairDatabase/repairs/coatsRepair") }} />
                <RepairCategory text={"Sportswear"} onPress={() => { router.replace("/repairDatabase/repairs/sportswearRepair") }} />
                <RepairCategory text={"Knitwear"} onPress={() => { router.replace("/repairDatabase/repairs/knitwearRepair") }} />
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
        fontSize: 50,
        textAlign: 'center',
        width: "100%",
        margin: "1%",
    }
});

