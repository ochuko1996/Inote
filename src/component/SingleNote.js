import { Pressable, Text, View } from "react-native";
import { styles } from "../Styles/StyledNote";
import  Icon from "react-native-vector-icons/FontAwesome";
import { currentDateTime } from "../utils/datefn";
import Date from "./Date";

export default function SingleNote({id, title, content, handleRemoveNote, navigation}) {
  return (
    <Pressable onPress={()=>{
      navigation.navigate('Details', {id, title, content})
    }}>
      <View style={styles.noteContainer}>
        <View style={styles.noteWrapper}>
          <View style={styles.noteTextWrapper}>
              <Text style={styles.noteHeader}>
                  {title}
              </Text>
              <Text>
                  {content.substr(0,100)}...
              </Text>
          </View>
          <Pressable style={[styles.removeBtn, styles.selfCenter, styles.bgRed]} onPress={handleRemoveNote}>
            <Icon name='times' size={20} color={"#fff"}/>
          </Pressable>
        </View>
        <Date/>
      </View>
    </Pressable>
  )
}
