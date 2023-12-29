import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    formOverlay:{
        backgroundColor: "rgba(0,0,0,0.9)",
        padding: 10,
        flex: 1,

    },
    formWrapper: {
        flex: 1,
        justifyContent: "center",
        
    },
    formInput: {
        borderWidth: 1,
        borderRadius: 10,
        minHeight: 40,
        marginBottom: 10,
        padding: 5,
        borderColor: "#fff",
        color: "#fff",
        // textAlign:
    },
    formBtn:{
        backgroundColor: "#22ccff",
        borderRadius: 10,        
        padding: 10,
        height: 40,   
        alignItems: "center",    
    },
    formBtnText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase'
    },
    noteContainer: {
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        height: 80,
        marginBottom: 10,
        alignItems: "center",
        marginTop: 10,
    },
    noteWrapper:{
        flex: 3,
    },
    noteHeader: {
        fontWeight: "500",
        // borderBottomWidth: 1, 
        textTransform: "capitalize"
    },
    navBtn:{
        backgroundColor: '#000',
        width: 120,
        padding: 10,
        borderRadius: 5,
      },
    navText: {
        color: "#fff",
        textAlign: 'center',
        textTransform: "capitalize"
    },
    removeBtn: {
        // flex: 1,
        width: 50,
        backgroundColor: 'red',
        padding: 5,
        alignSelf: "flex-end"
    },
    alignCenter: {
        alignItems: "center"
    },
    selfCenter: {
        alignSelf: "center"
    },
    removeBtnText: {
        color: '#fff', 
        textAlign: 'center',
        textTransform: "capitalize"
    }

})