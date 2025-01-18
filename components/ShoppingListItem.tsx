import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { theme } from '../theme'

interface Props {
  name: string
  isCompleted?: boolean
}

const ShoppingListItem = ({ name, isCompleted }: Props) => {
  const handleDelete = () => {
    Alert.alert('Delete', `Are you sure you want to delete ${name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          console.log('deleted')
        },
        style: 'destructive'
      }
    ])
  }

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined
      ]}
    >
      <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined
        ]}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <Text
          style={
            styles.buttonText
          }
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey
  },
  completedButton: {
    backgroundColor: theme.colorGrey
  },
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})

export default ShoppingListItem
