import { StyleSheet, Text, View, TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import React from 'react';

export default function RecoverPage(){

    const [senha, onChangeNumber] = React.useState('');

    return(
        <SafeAreaView style={styles.body}>
            <Text style={styles.name}>
            Recuperação de conta
            </Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={senha}
            placeholder = "000000"
            />
            <Link style={styles.links} to={{screen: 'login'}}>recuperar</Link>
    </SafeAreaView>
    )
}
{/* */}

const styles=StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#222',
    },
    name:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36
    },
    input:{
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        color: 'white',
        borderColor: 'white',
    },
    links:{
        textAlign: 'center',
        padding: 15,
        color: 'white'
    }
  });