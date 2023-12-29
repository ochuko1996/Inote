// import TodoApp from "./src/TodoApp/TodoApp";
import Todo from "./src/Todo/Todos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Note from "./src/NoteApp/Notes";
import NoteDetails from "./src/screens/NoteDetails";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todos" component={Todo}/>
        <Stack.Screen name="Note" component={Note}/>
        <Stack.Screen name="Note-Details" component={NoteDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })

