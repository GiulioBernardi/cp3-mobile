import React from 'react'
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

export default class App extends React.Component {
  state = {
    qtd : 0
  }

  render() {
    return (
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.containerCarrinho}>
            <Image style={estilos.carrinho} source={require('./images/carrinho.png')} />
            <Text style={estilos.textoCarrinho}>Qtd.: {this.state.qtd}</Text>
          </View>

          <Text style={estilos.textosTitulo}>Dragão</Text>
          <Image style={estilos.imagens} source={require('./images/aqua.jpg')} />
          <Text style={estilos.textosDescricao}>Modelo criado pelo artista Asvaldo Pereira, que representa o famoso dragão da cultura oriental.</Text>
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>

          <Text style={estilos.textosTitulo}>Cenário de guerra</Text>
          <Image style={estilos.imagens} source={require('./images/war.jpg')} />
          <Text style={estilos.textosDescricao}>Modelo criado pelo artista Erisvaldo Amilton sobre um cenário de guerra com soldados, tanques e outros detalhes</Text>
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>

          <Text style={estilos.textosTitulo}>Dragão</Text>
          <Image style={estilos.imagens} source={require('./images/barco.jpg')} />
          <Text style={estilos.textosDescricao}>Lancha de luxo feita em plástico e madeira</Text>
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>

          <Text style={estilos.textosTitulo}>Dragão</Text>
          <Image style={estilos.imagens} source={require('./images/navio.jpg')} />
          <Text style={estilos.textosDescricao}>Navio das grandes cruzadas. Velas feitas de tecido e corpo em madeira.</Text>
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>
        </View>
      </ScrollView>
    )
  }
}

const estilos = StyleSheet.create({
    imagens : {
      width : 250,
      height : 250
    },
    textosTitulo :{
      fontSize : 25,
      padding:10
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textosDescricao : {
      justifyContent: 'center',
      paddingTop: 5,
      paddingLeft : 25,
      paddingRight : 25
    },
    botao : {
      paddingBottom: 25
    },
    carrinho : {
      width : 40,
      height : 40,
      
      alignSelf : 'flex-end'
    },
    containerCarrinho: {
      display: 'flex',
      width : 380,
    },
    textoCarrinho : {
      paddingRight : 20,
      alignSelf : 'flex-end'
    }
})