import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

const TaskItem = ({ task, onToggleCompleted, onDeleteTask, onEditTask }) => {
  const [editValue, setEditValue] = useState(task.title)
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveTask = () => {
    onEditTask(editValue)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditValue(task.title)
  }

  const [memo, setMemo] = useState('');
  const [isEditingMemo, setIsEditingMemo] = useState(false);

  const handleEditMemo = () => {
    setIsEditingMemo(true);
    setMemo(task.memo);
  };

  const handleSaveMemo = () => {
    onEditTask(index, task.title, memo);
    setIsEditingMemo(false);
  };

  const handleCancelMemoEdit = () => {
    setIsEditingMemo(false);
    setMemo('');
  };

  const handleEditTask = (index, newTitle, newMemo) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].title = newTitle;
    updatedTaskList[index].memo = newMemo;
    setTaskList(updatedTaskList);
    setEditIndex(null);
  };

  return (
    <View style={styles.taskItem}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.editInput}
            value={editValue}
            onChangeText={setEditValue}
            autoFocus
          />
          <TouchableOpacity onPress={handleCancelEdit}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSaveTask}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={onToggleCompleted}>
            <View style={styles.checkbox}>
              {task.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={[styles.taskTitle, task.completed && styles.completedTask]}>
            {task.title}
          </Text>
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteTask}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3FE8D9',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#3FE8D9',
    fontSize: 16,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    color: '#FF4B5C',
    fontSize: 14,
    marginLeft: 8,
  },
  editButtonText: {
    color: 'gray',
    marginLeft: 10,
  },
  editInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#ff7675',
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  saveButton: {
    backgroundColor: '#55efc4',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
  memo: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
  addMemo: {
    marginTop: 8,
    fontSize: 14,
    color: 'gray',
  },
  memoInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
})

export default TaskItem
