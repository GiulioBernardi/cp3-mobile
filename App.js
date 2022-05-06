import React from 'react'
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import Produto from './components/Produto'

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

          <Produto 
            titulo={"Dragão"} 
            descricao={
              "Modelo criado pelo artista Asvaldo Pereira, que representa o famoso dragão da cultura oriental."
            }
          />
          <Image style={estilos.imagens} source={require('./images/aqua.jpg')} />
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>


          <Produto 
            titulo={"Cenário de guerra"} 
            descricao={
              "Modelo criado pelo artista Erisvaldo Amilton sobre um cenário de guerra com soldados, tanques e outros detalhes."
            }
          />
          <Image style={estilos.imagens} source={require('./images/war.jpg')} />
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>


          
          <Produto 
            titulo={"Lancha"}
            descricao={
              "Lancha de luxo feita em plástico e madeira"
            }
          />
          <Image style={estilos.imagens} source={require('./images/barco.jpg')} />
          <Button style={estilos.botao} title="Adicionar ao carrinho" onPress={() => {
            this.setState({qtd : this.state.qtd + 1 })
          }}/>

        
          <Produto 
            titulo={"Navio"}
            descricao={
              "Navio das grandes cruzadas. Velas feitas de tecido e corpo em madeira."
            }
          />
          <Image style={estilos.imagens} source={require('./images/navio.jpg')} />
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
    height : 250,
    marginBottom: 5
  },  
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7E7E7'
  },
  botao : {
    paddingTop: 10
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