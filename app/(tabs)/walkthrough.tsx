import { View, Text, StyleSheet } from 'react-native';
import { Colors } from "../constants/colors";
import { useRouter } from "expo-router";
import WalkthroughButton from '../components/walkthroughButton';

export default function Tab() {
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
            <Text style={styles.question}>Which Describes You Best?</Text>
            <WalkthroughButton text='Loose Button' onPress={() => {}}/> 
            <WalkthroughButton text='Rip or Tear' onPress={() => {}}/> 
            <WalkthroughButton text='Open Hole' onPress={() => {}}/> 
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
      fontFamily: 'CrimsonText-Bold',
      color: Colors.textBackground,
      fontSize:50,
      textAlign:'center',
      margin: "5%",
  }
});

