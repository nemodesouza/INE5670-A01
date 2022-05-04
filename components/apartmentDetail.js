import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import {Image} from 'react-native-web';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados do Apartamento',
  };

  constructor(props) {
    super(props);
    let apartment = props.navigation.getParam('apartment');
    this.state = {
      name: apartment.name,
      email: apartment.email,
      phone: apartment.phone,
      lat: apartment.address.geo.lat,
      lng: apartment.address.geo.lng,
      rent: 'R$ 1300,00',
      gender: 'Feminino',
      apartment_type: 'Individual',
      furniture: 'Cama de solteiro, armário',
      bathroom: 'Privativo',
      size: '39m²',
      pictures: '',
      description: 'Ap mobiliado, muito chique',
      video: '',
      extras: 'Só dog que é aceito'
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      name,
      email,
      phone,
      lat,
      lng,
      rent,
      gender,
      apartment_type,
      furniture,
      bathroom,
      size,
      pictures,
      description,
      video,
      extras
    } = this.state;
    return (
      <View>
        <View>
          <Image style={styles.stretch} source={'https://picsum.photos/200/300'} />
        </View>
        <View style={styles.container}>
          <Text style={styles.apartmentName}>{name}</Text>
          <Text style={styles.apartmentDetails}>E-mail: {email}</Text>
          <Text style={styles.apartmentDetails}>Telefone: {phone}</Text>
          <View style={styles.button} >
            <Button title="Mapa" onPress={() => null} />
          </View>
          <Text style={styles.apartmentDetails}>Valor: {rent}</Text>
          <Text style={styles.apartmentDetails}>Gênero aceito: {gender}</Text>
          <Text style={styles.apartmentDetails}>Tipo de acomodação: {apartment_type}</Text>
          <Text style={styles.apartmentDetails}>Mobiliário: {furniture}</Text>
          <Text style={styles.apartmentDetails}>Banheiro: {bathroom}</Text>
          <Text style={styles.apartmentDetails}>Área: {size}</Text>
          <View style={styles.button} >
            <Button title="Imagens" onPress={() => null} />
          </View>
          <Text style={styles.apartmentDetails}>Detalhes: {description}</Text>
          <View style={styles.button} >
            <Button title="Vídeo" onPress={() => null} />
          </View>
          <Text style={styles.apartmentDetails}>Informações extra: {extras}</Text>


        </View>
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('ContactList')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  apartmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  apartmentDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  },
  stretch: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
