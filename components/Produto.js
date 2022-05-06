import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const Produto = (props) => {
  return(
    <View style={estilos.container}>
      <Text style={estilos.textosTitulo}>{props.titulo}</Text>
      <Text style={estilos.textosDescricao}>{props.descricao}</Text>
    </View>        
  )
}
export default Produto;


const estilos = StyleSheet.create({
  textosTitulo :{
    fontSize : 25,
    paddingTop:30
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textosDescricao : {
    justifyContent: 'center',
    paddingTop: 5,
    paddingLeft : 65,
    paddingRight : 65
  }
})