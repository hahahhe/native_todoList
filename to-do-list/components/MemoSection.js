import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const MemoSection = () => {
  const [memo, setMemo] = useState('')
  const [showMemo, setShowMemo] = useState(true)

  const handleToggleMemo = () => {
    setShowMemo(!showMemo)
  }

  return (
    <View style={styles.memoSection}>
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleMemo}>
        <Text style={styles.toggleButtonText}>{showMemo ? 'Hide Memo' : 'Show Memo'}</Text>
      </TouchableOpacity>
      {showMemo && (
        <TextInput
          style={styles.memoInput}
          multiline
          placeholder="Add a memo"
          value={memo}
          onChangeText={setMemo}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  memoSection: {
    marginTop: 16,
  },
  toggleButton: {
    backgroundColor: '#3FE8D9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  memoInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    minHeight: 100,
  },
})

export default MemoSection
