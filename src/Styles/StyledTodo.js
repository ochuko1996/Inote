import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      
    },
    wrapper: {
      padding: 5,
      flex: 1,
    },
    Header: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 15,
        fontWeight: '500',
        textTransform: "uppercase",
        textAlign: 'center'
    },
    input: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderRightWidth: 0,
        padding: 5,
        flex: 3
    },
    btn: {
        // borderWidth: 1,
        backgroundColor: "#007aff",
        justifyContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        padding: 5,
        flex: 1,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase'
    },
    inputWrapper: {
        flexDirection: 'row',
        height: 50,
        marginVertical: 20,
    },
    tasksWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    taskText: {
        flex: 3
    },
    removeBtn: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        padding: 5,
        alignItems: "center",
        borderRadius: 5,
        marginLeft: 20,
    },
    // removeBtnText: {
    //     color: '#fff', 
    //     textAlign: 'center'
    // },
    pass: {
        textDecorationLine: 'line-through',
        color: 'green'
    },
    navLinks: {
        flexDirection: "row"
    }
  });