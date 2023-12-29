import { Pressable, Text, View } from "react-native";
import { styles } from "../Styles/StyledNote";

export default function SingleNote({id, title, content, handleRemoveNote, navigation}) {
  return (
    <Pressable onPress={()=>{
      navigation.navigate('Note-Details', {id, title, content})
    }}>
      <View style={styles.noteContainer}>
        <View style={styles.noteWrapper}>
            <Text style={styles.noteHeader}>
                {title}
            </Text>
            <Text>
                {content.substr(0,100)}...
            </Text>
        </View>
        <Pressable style={[styles.removeBtn, styles.selfCenter]} onPress={handleRemoveNote}>
          <Text style={styles.removeBtnText}>
            Delete
          </Text>
        </Pressable>
      </View>
    </Pressable>
  )
}
