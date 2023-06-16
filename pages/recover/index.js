import { Text, View } from "react-native";
import { Link } from "@react-navigation/native";

export default function RecoverPage(){
    <View>
        <Text> Recuperação de senha </Text>
        <Text> Enviamos um email com um numero de 6 digitos , coloque no campo abaixo </Text>
        <Link to={{screen: 'login'}}> recuperar </Link>
    </View>
}