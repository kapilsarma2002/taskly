import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from './theme';

export default function App() {

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => {console.log('deleted') }, style: 'destructive'},
    ]);
  }

  return (
    <View style={styles.container}>
      <View style ={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
      <TouchableOpacity style={styles.button} onPress={handleDelete} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,  
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
