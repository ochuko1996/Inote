import { View, Pressable, Text, TextInput } from "react-native"
export default function Input({styles, text, handleChange, addTask}) {
  return (
    <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder='Add 
            Todo' 
            onChangeText={handleChange} 
            value={text}
          />
          <Pressable style={styles.btn} onPress={addTask}>
            <Text style={styles.btnText}>add todo</Text>
          </Pressable>
    </View>
  )
}
