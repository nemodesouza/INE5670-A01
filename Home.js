import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tamanduá Imóveis',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          {/*<Image style={styles.logo} source={require('./assets/snack-icon.png')} />*/}
        </View>
        <View style={styles.button}>
          <Button title="Ver apartamentos" onPress={() => navigate('ApartmentList')} />
        </View>
        <View style={styles.button}>
          <Button title="Sair" onPress={() => BackHandler.exitApp() } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
  button: {
    padding: 15
  }
});

//[
//  '{{repeat(5, 7)}}',
//  {
//    _id: '{{objectId()}}',
//    index: '{{index()}}',
//    isActive: '{{bool()}}',
//    rent: '{{floating(1000, 4000, 2, "R$0,0.00")}}',
//    picture: 'https://picsum.photos/200/300',
//    pictures: [
//      '{{repeat(3)}}',
//      {
//        id: '{{index()}}',
//        imgLink: '{{random("https://picsum.photos/199/299", "https://picsum.photos/201/301")}}'
//      }
//    ],
//    rentArea: '',
//    housingType: '{{random("masculina", "feminina", "mista")}}',
//    acommodationType: '{{random("individual", "compartilhado")}}',
//    bathType: '{{random("privativo", "compartilhado")}}',
//    name: '{{firstName()}} {{surname()}}',
//    email: '{{email()}}',
//    phone: '+55 {{phone()}}',
//    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
//    description: '{{lorem(1, "paragraphs")}}',
//    lat: '{{floating(-90.000001, 90)}}',
//    long: '{{floating(-180.000001, 180)}}',
//    extra: '{{random("Não aceitamos cachorros", "Não aceitamos gatos", "Não aceitamos fumantes", "Não aceitamos pós graduandos", "Não aceitamos professores", "Máquinas de lavar devem funcionar entre as 8:00-22:00h", "Não é peritido conversas altas no corredor")}}'
//  }
//]