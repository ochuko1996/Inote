import { Text, ScrollView } from "react-native"
import SingleTask from "./SingleTask"

export default function Tasks({styles, tasks, removeTask}) {
  return (
    <ScrollView>
          <Text style={styles.Header}>
            {tasks.length === 0 ? "please add todo": "added todos"}
          </Text>
          {
            tasks.sort((a, b)=> b.id - a.id).map(item => (
                <SingleTask
                    key={item.id}
                    styles={styles}
                    item={item}
                    removeTask={removeTask}
                />
              )
            )
          }
    </ScrollView>
  )
}
