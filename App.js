import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello everyone</Text>
      <StatusBar style="auto" />
      <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
