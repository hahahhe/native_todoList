import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import ClearButton from '../components/ClearButton'
import RemainingTasks from '../components/RemainingTasks'
import ToggleFilterButton from '../components/ToggleFilterButton'
import MemoSection from '../components/MemoSection'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ToDoListScreen = ({ route }) => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { title: task, completed: false }])
      setTask('')
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList.splice(index, 1)
    setTaskList(updatedTaskList)
  }

  const handleToggleCompleted = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].completed = !updatedTaskList[index].completed
    setTaskList(updatedTaskList)
  };

  const handleToggleFilter = () => {
    setShowCompleted(!showCompleted)
  }

  const handleClearAll = () => {
    setTaskList([])
  }

  const filteredTaskList = showCompleted ? taskList.filter((task) => !task.completed) : taskList

  const remainingTasks = taskList.filter((task) => !task.completed).length

  return (
    <View style={styles.container}>
      <Header />
      <RemainingTasks remainingTasks={remainingTasks} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
      <ToggleFilterButton showCompleted={showCompleted} onPress={handleToggleFilter} />
      <TaskList
        taskList={filteredTaskList}
        onToggleCompleted={handleToggleCompleted}
        onDeleteTask={handleDeleteTask}
      />
      <ClearButton onPress={handleClearAll} />
      <MemoSection />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#2f95dc",
    borderRadius: 5,
    padding: 10,
  },
})

export default ToDoListScreen