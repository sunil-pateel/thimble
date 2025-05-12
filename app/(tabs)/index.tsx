import { Text, View } from "react-native";
import { Colors } from "../constants/colors";
import FloatingWindow from "../components/floatingWindow";
import { useRouter } from "expo-router";
export default function Index() {
    const router = useRouter();
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.darkBackground, // Dark parent
        }}>
            <View style={{
                flexDirection: "column",
                height: '100%',
                backgroundColor: Colors.lightBackground, // Green
                borderRadius: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <FloatingWindow header="Guided Walkthrough" body={guidedRepairBody} onPress={() => { router.replace("/walkthrough"); }} />
                <FloatingWindow header="Repair Database" body={repairDatabaseBody} onPress={() => { router.replace("/repairDatabase"); }} />
            </View>
        </View>
    );
}

const guidedRepairBody = "Guided repair tool that asks you a series of questions to determine what kind of repair you need. Currently a work in progress. TBD";
const repairDatabaseBody = "Database of repair information with loads of tutorials and videos to help you with your repair. Video functionality still a bit wonky so please be kind :).";
