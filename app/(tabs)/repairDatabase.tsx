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
                <FloatingWindow header="Materials Needed" body={materialsNeededBody} onPress={() => { router.replace("/repairDatabase/materials"); }} />
                <FloatingWindow header="Sewing Skills" body={sewingSkillsBody} onPress={() => { router.replace("/repairDatabase/sewingSkills"); }} />
                <FloatingWindow header="Common Repairs" body={commonRepairsBody} onPress={() => { router.replace("/repairDatabase/repairs"); }} />
            </View>
        </View>
    );
}

const materialsNeededBody = "Perfect starting place for beginners with no knowledge about sewing or repairs. Gives you an overview of all of the materials necessary to start repairing your clothing.";
const sewingSkillsBody = "Teaches you all the stitches you would need to repair your clothing. Provides tutorials for both left handed and right handed invidiuals.";
const commonRepairsBody = "Database for all types of repairs. From buttons to jeans to jackets, everything you would need is in this section. Divided up by type of clothing.";
