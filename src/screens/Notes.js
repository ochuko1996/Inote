import {useState} from 'react'
import { FlatList, Modal, Pressable, Text, View, SafeAreaView } from 'react-native'
import { styles } from '../Styles/StyledNote'
import SingleNote from '../component/SingleNote'
import ModalContent from '../component/ModalContent'

export default function Note({navigation}) {
  const initialValue = {
    title: '',
    content: ''
  }
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState(initialValue)
  const [notes, setNotes] = useState([])
  const onChangeHandler = (name, values)=>{
    setValues(prev => ({...prev, [name]: values}))
  }
  const modalClose = ()=> {setIsOpen(false)}
  const addNotes = ()=>{
    if (values.title.trim() !== "" && values.content.trim() !== "") {
      setNotes([
        ...notes, 
        {id: Date.now().toString(), title: values.title, content: values.content}
      ])
      setValues(initialValue)
      modalClose()
    }
  }
  const sortedNotes = notes ? notes.sort((a, b)=> b.id - a.id) : []
  const removeNote = (id)=> {
    setNotes(prevData => prevData.filter(item => item.id !== id) )
  }
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Pressable 
            onPress={() => setIsOpen(true)}
            style={styles.navBtn}
          >
            <Text style={styles.navText}>
              Add New Note
            </Text>
          </Pressable>
          <Modal
            animationType='fade'
            transparent={true}
            visible={isOpen}
            onRequestClose={modalClose}
          >
            <ModalContent
              values={values}
              isOpen={isOpen}
              addNotes={addNotes}
              onChangeHandler={onChangeHandler}
              modalClose={modalClose}
              
            />
          </Modal>
          <FlatList
            data={notes}
            renderItem={({item})=> <SingleNote key={item.id} {...item} handleRemoveNote={()=> removeNote(item.id)} navigation={navigation}/>}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
  )
}
