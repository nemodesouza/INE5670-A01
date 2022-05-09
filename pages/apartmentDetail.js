import * as React from "react";
import { Button, Dimensions, StyleSheet, ScrollView, Text, View, Image } from "react-native";

const{width} = Dimensions.get('window');
const height = width * 0.6;
export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Dados do Apartamento",
  };

  constructor(props) {
    super(props);
    let apartment = props.navigation.getParam("apartment");    
    this.state = {
      picture: apartment.picture,
      name: apartment.name,
      email: apartment.email,
      phone: apartment.phone,
      lat: apartment.lat,
      lng: apartment.lng,
      rent: apartment.rent,
      gender: apartment.housingType,
      apartment_type: apartment.acommodationType,
      furniture: "Cama de solteiro, armário",
      bathroom: apartment.bathType,
      size: apartment.rentArea,
      pictures: apartment.pictures,
      description: apartment.description,
      video: "",
      extras: apartment.extra,
      favorited: false,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      id,
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
      picture,
      extras,
      favorited,
    } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>        
            <View>
              <Image style={styles.stretch} source={{ uri: picture }} />
            </View>

            <View style={styles.container}>              
              <Text style={styles.apartmentName}>{this.state.favorited}</Text>
              <Text style={styles.apartmentName}>{name}</Text>
              <Text style={styles.apartmentDetails}>Detalhes: {description}</Text>
              <View style={styles.bottomSpace} />              
            </View>

            <View style={styles.button}>
              <Button title="Mapa" onPress={() => null} />
            </View>

            <View style={styles.container}>

              <Text style={styles.apartmentInfo}>E-mail: {email}</Text>
              <Text style={styles.apartmentInfo}>Telefone: {phone}</Text>                    
              <Text style={styles.apartmentInfo}>Gênero aceito: {gender}</Text>
              <Text style={styles.apartmentInfo}>
                Tipo de acomodação: {apartment_type}
              </Text>
              <Text style={styles.apartmentInfo}>Mobiliário: {furniture}</Text>
              <Text style={styles.apartmentInfo}>Banheiro: {bathroom}</Text>
              <Text style={styles.apartmentInfo}>Área: {size}</Text>
            </View>

            <View style={styles.button}>
              <Button title="Imagens" onPress={() => null} />
            </View>

            <View style={styles.container}>
            <Text style={styles.apartmentName}>Valor: {rent}</Text>
            </View>

            <View style={styles.button}>
              <Button title="Vídeo" onPress={() => null} />
            </View>
            
            <View style={styles.container}>
              <Text style={styles.apartmentDetails}>
                Informações extra: {extras}
              </Text>
            </View>

            <View style={styles.bottomSpace}>

            </View>

            <View style={styles.button}>
              <Button title="Voltar" onPress={() => navigate("ApartmentList")} />
            </View>

            <View style={styles.bottomSpace}>
            </View>
            
        </View>

        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginRight: 12,
    padding: 15,
  },
  flex: {  
    flex: 1,  
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 8,
  },
  apartmentName: {
    fontSize: 22,
    fontWeight: "bold",
    height: 44,
  },
  apartmentDetails: {
    fontSize: 16,
    height: 'auto',
  },
  apartmentInfo: {
    fontSize: 12,
    height: 22,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    padding: 14,
    paddingBottom: 14,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  bottomSpace:{
    paddingTop: 24,
    paddingBottom: 24,
  },
  // details: {
  //   width: "100%",
  //   height: 200,
  //   resizeMode: "cover",
  // },
});
