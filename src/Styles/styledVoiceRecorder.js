import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    wrapper:{
        padding: 10,
        flex: 1,
    },
    bodyWrapper: {
        flex: 5,
    },
    btnWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    circle:{
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgBlue:{
        backgroundColor: '#18defd'
    },
    bgRed:{
        backgroundColor: 'red'
    }, 
    recordWrapper:{
        flexDirection: "row"
    },
    recordText: {
        flex: 4,
    },
    mr20: {
        marginRight: 20
    }
})