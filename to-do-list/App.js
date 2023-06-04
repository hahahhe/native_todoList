import { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './components/Header'
import TaskList from './components/TaskList'
import ClearButton from './components/ClearButton'
import RemainingTasks from './components/RemainingTasks'
import ToggleFilterButton from './components/ToggleFilterButton'

const App = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    saveData()
  }, [taskList])

  const loadData = async () => {
    try {
      const savedTaskList = await AsyncStorage.getItem('taskList')
      if (savedTaskList) {
        setTaskList(JSON.parse(savedTaskList))
      }
    } catch (error) {
      console.log('Error while loading data:', error)
    }
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('taskList', JSON.stringify(taskList))
    } catch (error) {
      console.log('Error while saving data:', error)
    }
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { title: task, completed: false, memo: '' }])
      setTask('')
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList.splice(index, 1)
    setTaskList(updatedTaskList)
  }

  const handleEditTasks = (index) => {
    setEditIndex(index)
    setTask(taskList[index].title)
  }

  const handleEditTask = (index, newTitle, newMemo) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].title = newTitle
    updatedTaskList[index].memo = newMemo
    setTaskList(updatedTaskList)
    setEditIndex(null)
  }

  const handleToggleCompleted = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].completed = !updatedTaskList[index].completed
    setTaskList(updatedTaskList)
  }

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
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ToggleFilterButton showCompleted={showCompleted} onPress={handleToggleFilter} />
      <TaskList
        taskList={filteredTaskList}
        onToggleCompleted={handleToggleCompleted}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        editIndex={editIndex}
      />
      <ClearButton onPress={handleClearAll} />
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: '#2f95dc',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default App
