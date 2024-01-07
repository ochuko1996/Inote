import { styles } from "../Styles/StyledTodo";
import { useState } from 'react';
import { Pressable, Text, StyleSheet, View, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* <View style={styles.navLinks}>
          <Pressable
            style={style.navBtn}
            onPress={()=> navigation.navigate('Note')}>
              <Text style={style.navText}>
                notes
              </Text>
          </Pressable>
          <Pressable
            style={style.navBtn}
            onPress={()=> navigation.navigate('Voice Recording')}>
              <Text style={style.navText}>
                Voice Recording
              </Text>
          </Pressable>
        </View> */}
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
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  navBtn:{
    backgroundColor: '#000',
    width: 120,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  navText: {
    color: "#fff",
    textAlign: 'center',
    textTransform: "capitalize"
  }
})