import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,  
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  }
});
