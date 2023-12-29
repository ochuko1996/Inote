import { styles } from "../Styles/StyledTodo";
import { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import Input from "../component/TaskInput";
import Tasks from "../component/Tasks";

export default function Todo({navigation}) {
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState([])
    const handleChange = (text)=> {
      setText(text)
    }
    const addTask = ()=>{
      if (text.trim() !== "") {
        setTasks([...tasks, {id: Date.now().toString(), text: text}])
        setText('')
      }
    }
    const removeTask = (id)=> setTasks(tasks.filter(item => item.id !== id))
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable
          style={style.navBtn}
          onPress={()=> navigation.navigate('Note')}>
            <Text style={style.navText}>
              notes
            </Text>
        </Pressable>
        <Text style={styles.Header}>
          todo
        </Text>
        <Input 
            styles={styles} 
            text={text} 
            handleChange={handleChange}
            addTask={addTask} 
        />
        <Tasks 
            styles={styles}
            tasks={tasks} 
            removeTask={removeTask}
        />
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  navBtn:{
    backgroundColor: '#000',
    width: 120,
    padding: 10,
    borderRadius: 5,
  },
  navText: {
    color: "#fff",
    textAlign: 'center',
    textTransform: "capitalize"
  }
})