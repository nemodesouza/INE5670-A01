import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados do Apartamento',
  };

  constructor(props) {
    super(props);
    let apartment = props.navigation.getParam('contact');
    this.state = {
      name: apartment.name,
      email: apartment.email,
      phone: apartment.phone,
      lat: apartment.address.geo.lat,
      lng: apartment.address.geo.lng
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, email, phone, lat, lng } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.apartmentName}>{name}</Text>
          <Text style={styles.apartmentDetails}>E-mail: {email}</Text>
          <Text style={styles.apartmentDetails}>Telefone: {phone}</Text>
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
  }
});
