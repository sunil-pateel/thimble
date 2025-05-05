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
                <FloatingWindow header="Guided Repair Walkthrough" body={guidedRepairBody} onPress={() => { router.replace("/walkthrough"); }} />
                <FloatingWindow header="Repair Database" body={guidedRepairBody} onPress={() => { router.replace("/repairDatabase"); }} />
            </View>
        </View>
    );
}

const guidedRepairBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus  feugiat, leo ut eleifend blandit, elit libero feugiat mi, nec accumsan  nisi lorem nec purus. Aliquam erat volutpat. Aenean venenatis massa in  metus aliquet, ac scelerisque diam consequat. Morbi sollicitudin, quam";
