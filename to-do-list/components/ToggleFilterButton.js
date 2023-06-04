import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ToggleFilterButton = ({ showCompleted, onPress }) => {
  return (
    <TouchableOpacity style={styles.toggleFilterButton} onPress={onPress}>
      <Text style={styles.buttonText}>{showCompleted ? 'Hide Completed' : 'Show Completed'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  toggleFilterButton: {
    backgroundColor: '#3FE8D9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default ToggleFilterButton
