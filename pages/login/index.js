import { StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";

export default function LoginPage(){
    <View style={styles.vtext}>
        <Text style={styles.name}>
            Login
        </Text>
        <Text>
            Digite seu nome:
        </Text>
        <Text>
            Digite sua senha:
        </Text>
        <Link to={{screen: 'dashboard'}}>Logar</Link>
        <Link to={{screen: 'recover'}}>Esqueceu sua senha?</Link>
        <Link to={{screen: 'cadastro'}}>Ainda não possui cadastro?</Link>
    </View>
}
{/* */}

const styles=StyleSheet.create({
    body:{
        flexDirection: "row",
        width: '95%',
        height: '100%',
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
  });
  