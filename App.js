import { StyleSheet, Text, View } from 'react-native';
import BMICalculator  from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <BMICalculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      },
});
