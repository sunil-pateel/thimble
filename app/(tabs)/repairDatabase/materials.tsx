import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from "../../constants/colors";
import RepairWindow from '../../components/repairWindow';
import MaterialWindow from '@/app/components/materialWindow';

export default function Tab() {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: Colors.darkBackground, // Dark parent
        }}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: 'wrap',
                minHeight: '100%',
                backgroundColor: Colors.lightBackground, // Green
                borderRadius: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <Text style={styles.header}>Materials Needed</Text>
                <MaterialWindow header={headerArray} body={bodyArray} onPress={() => {}}/>
            </View>
        </ScrollView>
    );
}


const threadBody = "Try to get thread that matches the color of the garment as well as the thickness of the other seams."
const needlesBody = "Needles depend on the size of thread you are using and how thick the material you are trying to repair is."
const threaderBody = "A threader is highly recommended for any kind of repairs. Getting a small piece of thread through a needle eye can be challenging at best and infuriating at worst. Getting a threader will be a life saver."
const seamRipperBody = "Although not strictly necessary, seam rippers are a cheap easy way to remove broken seams in your clothing."
const pinsBody = "Bobby pins are not necessary by any means, but are useful for holding clothing in place for any difficult repairs that might need stability."
const thimbleBody = "Thimbles are only used for when your needle is thick and pushing the needle through the material becomes painful. It saves you some pain so it might be a worthwhile investment for you."

const headerArray = ["Thread (Required)", "Needles (Required)","Threader (Recommended)", "Seam Ripper (Recommended)", "Pins (Optional)", "Thimble (Optional)"]
const bodyArray = [threadBody, needlesBody, threaderBody, seamRipperBody, pinsBody, thimbleBody]

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

