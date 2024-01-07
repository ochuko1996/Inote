import React from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { styles } from '../Styles/StyledNote'
export default function NoteForm({values, onChangeHandler, addNotes, btnText}) {
  return (
    <View style={styles.formWrapper}>
            <TextInput
                placeholder='enter note title'
                value={values.title}
                onChangeText={title => onChangeHandler('title', title)}
                style={styles.formInput}
                placeholderTextColor={"#fff"}
            />
            <TextInput
                placeholder='enter note content'
                value={values.content}
                onChangeText={content => onChangeHandler('content', content)}
                style={[styles.formInput]}
                multiline={true}
                rows={10}
                placeholderTextColor={"#fff"}
                />
            <Pressable style={styles.formBtn} onPress={addNotes}>
            <Text style={styles.formBtnText}>
                {btnText ? "Edit Note": "Add Note"}
            </Text>
            </Pressable>
        </View>
  )
}
