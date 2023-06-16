import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rpg from '../../src/components/RPG';

const listaRpg = [
  {
    foto: "https://m.media-amazon.com/images/I/81fgh3aaUhL._AC_SL1500_.jpg",
    nome: "Chapeu do Luigi Vermelho",
    descr: "Protege contra os Debuff : 'Plagio','Processos'. Garante imunidade a copia de status",
    stats: "Def = 1000 / Atk = 150 /AtkSpeed = 190"
  },
  {
    foto: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2011/04/15/56356/56854/master_sword_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1209008_o.jpg",
    nome: "Espada do Principe Zelda",
    descr: "A lendaria espada produz um jogo de qualidade critica a cada 15 anos , maximo dano , velocidade minima",
    stats: "Def = 5 / Atk = 99999 / AtkSpeed = 1"
  },
  {
    foto: "https://imgs.ponto.com.br/1512055187/1xg.jpg",
    nome: "Ocarina da Nostalgia",
    descr: "Permite relançar jogo de 20 anos atras com 400 reais de dano , tudo pela nostalgia",
    stats: "Def = 400 / Atk = 500 / AtkSpeed = 300"
  },
]

export default function RPGpage() {
  return (
    <View style={styles.container}>
      {listaRpg.map(data => <Rpg data={data}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005',
    alignItems: 'center',
    justifyContent: 'center',
  },
});