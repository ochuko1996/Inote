import {useEffect} from 'react'
import { Text, View } from 'react-native'

export default function NoteDetails({route,navigation}) {
console.log(route.params);
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}
