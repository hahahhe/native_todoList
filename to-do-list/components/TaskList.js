import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import TaskItem from './TaskItem'

const TaskList = ({ taskList, onToggleCompleted, onDeleteTask, onEditTask, editIndex }) => {
  const renderItem = ({ item, index }) => (
    <TaskItem
      task={item}
      onToggleCompleted={() => onToggleCompleted(index)}
      onDeleteTask={() => onDeleteTask(index)}
      onEditTask={(newTitle) => onEditTask(index, newTitle)}
    />
  )

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
})

export default TaskList
