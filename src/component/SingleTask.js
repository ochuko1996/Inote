import { View, Pressable, Text } from "react-native";

export default function SingleTask({styles, item, removeTask}) {
  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.taskText}>
        {item.text}
      </Text>
      <Pressable onPress={()=> removeTask(item.id)} style={styles.removeBtn}>
        <Text style={styles.removeBtnText}>Remove</Text>
      </Pressable>
    </View>
  )
}
