import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
// import { styles } from '../Styles/StyledTodo'

export default function CheckBox({onPress, isChecked }) {
  return (
    <Pressable onPress={onPress} style={styles.checkbox}>
        <Text style={styles.checkboxText}>
            {isChecked ? "✔": ""}
        </Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderBlockColor: 'gray',
    borderWidth: 2,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  checkboxText: {
    textAlign: "center",
    userSelect: "none",
  }
})