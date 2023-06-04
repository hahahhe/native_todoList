import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ClearButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.clearButton} onPress={onPress}>
      <Text style={styles.buttonText}>Clear All</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  clearButton: {
    backgroundColor: '#FF4B5C',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default ClearButton
