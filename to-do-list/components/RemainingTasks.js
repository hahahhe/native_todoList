import { View, Text, StyleSheet } from 'react-native'

const RemainingTasks = ({ remainingTasks }) => {
  return (
    <View style={styles.remainingTasks}>
      <Text style={styles.remainingTasksText}>{remainingTasks} tasks remaining</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  remainingTasks: {
    marginBottom: 16,
  },
  remainingTasksText: {
    fontSize: 16,
    color: '#666',
  },
})

export default RemainingTasks
