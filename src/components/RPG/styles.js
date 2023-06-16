import { StyleSheet } from "react-native"

const style=StyleSheet.create({
    body:{
        flexDirection: "row",
        width: '95%',
        height: '28%',
        borderRadius: 15,
        padding: 8,
        backgroundColor: 'black',
        marginBottom: 10
    },
    vimg:{
        width: '30%',
        height: '100%',
        padding: 8
    },
    img:{
        width:'100%',
        height:'100%'
    },
    vtext:{
        width: '70%',
        padding: 8
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    desc: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    buton:{
        position: 'relative',
        bottom: 0
    }
})

export default style