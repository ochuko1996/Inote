import {useState, useEffect, useRef} from 'react'
import { SafeAreaView,  Pressable, Text, View, Animated} from 'react-native'
import {Audio} from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from '../Styles/styledVoiceRecorder'
import { formatTime } from '../utils/timer'
// import from ''
export default function VoiceRecorder() {
  const [recording, setRecording] = useState()
  const [audioUri, setAudioUri] = useState(null);
  const [recordings, setRecordings] = useState([])
  const [sounds, setSounds] = useState({})
  const [elapsedTime, setElapsedTime] = useState({})
  const blinkAnimation = useRef(new Animated.Value(0)).current

  const startBlinkingAnimation = ()=>{
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start()
  }
  const stopBlinkingAnimation = ()=>{
    Animated.timing(blinkAnimation, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).stop()
  }
  const startRecording = async()=>{
     try {
      console.log("requesting permissions");
      await Audio.requestPermissionsAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })
      console.log('start recording...');
      const {recording} = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY)
      setRecording(recording)

      recording.setOnRecordingStatusUpdate((status) => {
        console.log('Recording Status:', status);
        console.log('Elapsed Time (ms):', status.durationMillis / 1000);
        // const elapsedTimeInSeconds = status.durationMillis / 1000;
        // setElapsedTime(elapsedTimeInSeconds);
      });
      startBlinkingAnimation()
      console.log('Recording Started');
     } catch (error) {  
      console.error('Failed to start recording', err);
     }
  }
  const stopRecording = async()=>{
    console.log('Stopping recording..');
    setRecording(undefined)
    
    await recording.stopAndUnloadAsync()
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    )
    const uri = recording.getURI();
    setAudioUri(uri)
    const splitedUri = uri.split('blob:http://localhost:19006/')[1]
    console.log(splitedUri);
    setRecordings(prev => ([...prev, {id: splitedUri, name: splitedUri, uri: uri}]))
    console.log('Recording stopped and stored at', uri);
    recording.setOnRecordingStatusUpdate((status) => {
      // console.log('Recording Status:', status);
      const elapsedTimeInSeconds = status.durationMillis / 1000;
      setElapsedTime(prev => ({
        ...prev,
        [splitedUri]:elapsedTimeInSeconds
      }));
    });
    stopBlinkingAnimation()
  }
  console.log(elapsedTime);
  const playRecording = async(uri)=>{
    if(audioUri){
      const {sound} = await Audio.Sound.createAsync({uri: audioUri})
      console.log(sound);
      setSounds(prev => ({...prev, [uri]:sound}))
      await sound.playAsync();
      // setIsPlaying(true)
    }
  }
  const stopSound = async (uri) => {
    const sound = sounds[uri]
    if (sound) {
      await sound.unloadAsync();
      setSounds(prev => ({...prev, [uri]: null}));
    }
  };
  const deleteRecording = (id)=> (setRecordings(prev => prev.filter(record => record.id !== id)))

  useEffect(() => {
    return () => {
      // Cleanup: unload the sound when the component is unmounted
      Object.values(sounds).forEach(async (sound) => {
        if (sound) {
          await sound.unloadAsync();
        }
      });
    };
  }, [sounds]);
 
  const {wrapper, bgBlue, bgRed, circle, bodyWrapper, btnWrapper, container, recordWrapper, recordText, mr20} = styles
  return (
    <SafeAreaView style={container}>
      <View style={wrapper}>
        <View style={bodyWrapper}>
            {recordings.map(record => (
              <View style={recordWrapper} key={record.id}>
                <Text style={recordText}>
                  {record.name}
                </Text> 
                <Text style={mr20}>
                  {formatTime(elapsedTime[record.id]) || 0}
                </Text> 
                <Pressable style={mr20} onPress={()=> (sounds[record.id] ? stopSound(record.id) : playRecording(record.id))}>
                  <Text>
                    {sounds[record.id] ? <Icon name='stop' size={15}/> : <Icon name='play' size={15}/>}
                  </Text>
                </Pressable>
                <Pressable onPress={() =>deleteRecording(record.id)}>
                  <Icon name='times' size={20}/>
                </Pressable>
              </View>
            ))}
        </View>
        <View style={btnWrapper}>
          <Pressable
            style={[circle, recording ? {...bgRed, opacity: blinkAnimation } : bgBlue]} 
            onPress={recording ? stopRecording : startRecording}
            >
            <Text>
              {recording ? <Icon name='microphone-slash' size={30} color={'#fff'}/> :<Icon name='microphone' size={30} color={'#fff'}/>}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
