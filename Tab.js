// navigations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import Todo from "./src/screens/Todos";
import Note from "./src/screens/Notes";
import NoteDetails from "./src/screens/NoteDetails";
import VoiceRecorder from "./src/screens/VoiceRecorder";
// icons 
import Mic from 'react-native-vector-icons/FontAwesome'
import TodoIcon from 'react-native-vector-icons/FontAwesome5'
import NoteIcon from 'react-native-vector-icons/Foundation'
import Auth from "./src/screens/Auth";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NoteStack = ()=>{
    return (<Stack.Navigator>
      <Stack.Screen name="Note" component={Note}/>
      <Stack.Screen name="Details" component={NoteDetails}/>
    </Stack.Navigator>)
}
const VoiceRecorderStack = ()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Voice Recording" component={VoiceRecorder}/>
        <Stack.Screen name="Auth" component={Auth}/>
      </Stack.Navigator>
    )
}
export default function Tabs() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
           screenOptions={{
            headerShown: false, // Hide the header for this stack navigator
          }}
        >
          <Tab.Screen 
            name="Todo" 
            component={Todo}
            options={{
            tabBarIcon: ({ color, size }) => (
            <TodoIcon name="tasks" color={color} size={size} />
          ),
        }}
          />
          <Tab.Screen 
            name="Note" 
            component={NoteStack}
            options={{
            tabBarIcon: ({ color, size }) => (
            <NoteIcon name="clipboard-notes" color={color} size={size} />
          ),
        }}
          />
          <Tab.Screen 
            name="Voice Recorder" 
            component={VoiceRecorderStack}
            options={{
            tabBarIcon: ({ color, size }) => (
            <Mic name="microphone" color={color} size={size} />
          ),
        }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
    );
} 