import {useEffect, useState} from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import NoteForm from '../component/NoteForm';
import { styles } from '../Styles/StyledNote';

export default function NoteDetails({route,navigation}) {
  const initialState = {
    title: "",
    content: ""
  }
  console.log(route.params);
  const {title, content} = route.params
  const [values, setValues] = useState(initialState)
  const onChangeHandler = (name, values)=>{
    setValues(prev => ({...prev, [name]: values}))
  }
  const updateNote = ()=> {

  }
  useEffect(() => {
    setValues(prev => ({
      ...prev,
      title: title,
      content: content
    }))
  
  }, [])
  
  return (
    <SafeAreaView style={styles.formOverlay}>
      <NoteForm
        values={values}
        onChangeHandler={onChangeHandler}
        addNotes={updateNote}
        btnText={"Edit Note"}
      />
    </SafeAreaView>
  )
}
