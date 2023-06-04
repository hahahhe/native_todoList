import { View, Text, StyleSheet } from 'react-native'

const Header = ({ remainingTasks }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>To-do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Header
