import { View, Pressable, Text } from "react-native";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from "./CheckBox";
import {Audio} from 'expo-av'

export default function SingleTask({styles, item, removeTask}) {
  const [isChecked, setIsChecked] = useState(false)
  const [sound, setSound] = useState()
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/mixkit-camera-digital-shutter-1432.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      playSound();
    } else {
      // Stop or pause the audio if needed
      // TrackPlayer.stop(); // or TrackPlayer.pause();
    }
  };
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.tasksWrapper}>
      <Text style={[styles.taskText, isChecked ? styles.pass : ""]}>
        {item.text}
      </Text>
      <CheckBox
        isChecked={isChecked} 
        // onPress={()=> setIsChecked(!isChecked)}
        onPress={handleCheckboxChange}
      />
      <Pressable onPress={()=> removeTask(item.id)} style={styles.removeBtn}>
        {/* <Text style={styles.removeBtnText}>Remove</Text> */}
        <Icon name="times" size={20} color='#fff'/>
      </Pressable>
    </View>
  )
}
