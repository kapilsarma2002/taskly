import { StyleSheet, View } from 'react-native';
import { theme } from './theme';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {

  return (
    <View style={styles.container}>
      <ShoppingListItem name='Coffee' isCompleted />
      <ShoppingListItem name='Tea' />
      <ShoppingListItem name='Milk' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    borderColor: theme.colorBlack,
    borderWidth: 1,
    borderRadius: 10,
  },
});
