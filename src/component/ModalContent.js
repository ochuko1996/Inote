import { View, Text, TextInput, Pressable, TouchableWithoutFeedback,   } from "react-native"

export default function ModalContent({isOpen, styles, addNotes, values, onChangeHandler, modalClose, removeNote}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.formOverlay}>
        <Pressable onPress={modalClose} style={styles.removeBtn}>
          <Text style={styles.removeBtnText}>
            close
          </Text>
        </Pressable>
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
                Add Note
            </Text>
            </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
