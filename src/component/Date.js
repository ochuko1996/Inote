import { Text, View, StyleSheet } from "react-native"
styles
import { currentDateTime } from "../utils/datefn"
import moment from "moment"
export default function Date() {
    // const currentDate = currentDateTime()
    // const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    
    const getCurrentTimestamp = () => {
        return moment().valueOf(); // This returns the timestamp in milliseconds
    }
    const timestamp = getCurrentTimestamp()
    const currentDate = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
  return (
    <View>
        <Text style={styles.date}>{currentDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 10
    }
})