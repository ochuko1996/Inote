import { View, Text, TextInput, Pressable, TouchableWithoutFeedback,   } from "react-native"
import { styles } from "../Styles/StyledNote"
import Icon  from "react-native-vector-icons/FontAwesome"
import NoteForm from "./NoteForm"
export default function ModalContent({addNotes, values, onChangeHandler, modalClose, removeNote}) {
  return (
    <Pressable style={{flex: 1}}>
      <View style={styles.formOverlay}>
        <Pressable onPress={modalClose} style={styles.removeBtn}>
            <Icon name='times' size={20} color={"#fff"}/>
        </Pressable>
        <NoteForm
          values={values}
          onChangeHandler={onChangeHandler}
          addNotes={addNotes}
        />
      </View>
    </Pressable>
  )
}
