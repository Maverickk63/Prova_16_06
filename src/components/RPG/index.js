import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Rpg(props){
    return(
        <View style={styles.body}>
            <View style={styles.vimg}>
                <Image style={styles.img} source={{uri: props.data.foto}}/>
            </View>,
            <View style={styles.vtext}>
                <Text style={styles.name}>{props.data.nome}</Text>
                <Text style={styles.desc}>{props.data.descr}</Text>
                <Text style={styles.desc}>{props.data.stats}</Text>
                <Button style={styles.buton} title="Propor Troca" />
            </View>
        </View>
    )
}
//bug free