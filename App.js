import { StyleSheet, Text, View, TextInput } from 'react-native';
import Greeting from './components/greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
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
