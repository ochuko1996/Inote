import {useState} from 'react'
import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native'
import { styles } from '../Styles/StyledAuth'

const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}
export default function Auth({navigation}) {
    const {container} = styles
    const [data, setData] = useState(initialValue)
    
    const onChangeHandler = (name, values)=>{
        setData(prev => ({
            ...prev,
            [name]: values
        }))
    }
    const handleSubmit = ()=>{
        if (data.firstName.trim() !== "" && data.lastName.trim() !== "" && data.email.trim() !== "" && data.password.trim() !== "") {
            setNotes( 
              {id: Date.now().toString(), firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password}
            )
            setValues(initialValue)
            modalClose()
          }
    }
  return (
    <SafeAreaView style={container}>
        <View>
            <Text>
                Inote
            </Text>
        </View>
        <View>
            <TextInput 
                placeholder='Enter first name'
                onChangeText={firstName => onChangeHandler('firstName', firstName)}
                value={data.firstName}
                style={""}
            />
            <TextInput 
                placeholder='Enter last name'
                onChangeText={lastName => onChangeHandler('lastName', lastName)}
                value={data.lastName}
                style={""}
            />
            <TextInput 
                placeholder='Enter email address'
                onChangeText={email => onChangeHandler('email', email)}
                value={data.email}
                style={""}
            />
            <TextInput 
                placeholder='Enter password'
                onChangeText={password => onChangeHandler('password', password)}
                value={data.password}
                style={""}
            />
            <Pressable onPress={handleSubmit}>
                <Text>
                    Sign Up
                </Text>
            </Pressable>
        </View>
        <View>
            <Text>
                have an account? sign in
            </Text>
        </View>
        
    </SafeAreaView>
  )
}
