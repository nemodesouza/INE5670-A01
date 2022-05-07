import * as React from "react";
import {
  ImageBackground,
  BackHandler,
  Button,
  StyleSheet,
  View,
} from "react-native";
import apartmentList from "./mock/apartments.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import background from './assets/background.png';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Tamanduá Imóveis",
  };

  constructor(props) {
    super(props);
    this.saveApartmentsOnStorage();
  }

  // Função para salvar os apartamentos do mock no AsyncStorage.
  saveApartmentsOnStorage() {
    
    this.hasApartmentListStorage().then((haslist) => {      
      if (haslist) return;
      // Salva na lista geral
      AsyncStorage.setItem("apartment_list", JSON.stringify(apartmentList));
      // Salva na lista de favoritos
      const favoritesList = apartmentList.filter((item) => item.isFavorited);
      AsyncStorage.setItem(
        "apartment_list_favorited",
        JSON.stringify(favoritesList)
      );
    });
  }

  // Checa se já existe lista de apartamento salvo no AsyncStorage.
  async hasApartmentListStorage() {
    return AsyncStorage.getItem("apartment_list").then((list) => !!list);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View style={styles.container}>
          {/* <ImageBackground source={background} resizeMode="cover" style={styles.image}/> */}
          {/* <Image style={styles.image} source={background} resizeMode="cover"/> */}
          {/* <Image style={styles.logo} source={require('./assets/snack-icon.png')} /> */}
        </View>
        <View style={styles.button}>
          <Button
            title="Ver apartamentos"
            onPress={() => navigate("ApartmentList", { favorites: false })}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Ver favoritos"
            onPress={() => navigate("ApartmentList", { favorites: true })}
          />
        </View>
        <View style={styles.button}>
          <Button title="Sair" onPress={() => BackHandler.exitApp()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 160,
    // backgroundImage: 'url(https://images.unsplash.com/photo-1551250928-243dc937c49d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2xlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80)',
  },
  logo: {
    height: 160,
    width: 160,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
  button: {
    padding: 15,
  },
});

// [
//   '{{repeat(5, 7)}}',
//   {
//     _id: '{{objectId()}}',
//     index: '{{index()}}',
//     isActive: '{{bool()}}',
//     rent: '{{floating(1000, 4000, 2, "R$0,0.00")}}',
//     picture: '{{random("https://picsum.photos/198/298", "https://picsum.photos/202/302")}}',
//     pictures: [
//       '{{repeat(3)}}',
//       {
//         id: '{{index()}}',
//         imgLink: '{{random("https://picsum.photos/199/299", "https://picsum.photos/201/301")}}'
//       }
//     ],
//     rentArea: '',
//     housingType: '{{random("masculina", "feminina", "mista")}}',
//     acommodationType: '{{random("individual", "compartilhado")}}',
//     bathType: '{{random("privativo", "compartilhado")}}',
//     name: '{{firstName()}} {{surname()}} {{random("Apartamento", "Residencial", "Condominio")}}',
//     email: '{{email()}}',
//     phone: '+55 {{phone()}}',
//     address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
//     description: '{{lorem(1, "paragraphs")}}',
//     lat: '{{floating(-90.000001, 90)}}',
//     long: '{{floating(-180.000001, 180)}}',
//     extra: '{{random("Não aceitamos cachorros", "Não aceitamos gatos", "Não aceitamos fumantes", "Não aceitamos pós graduandos", "Não aceitamos professores", "Máquinas de lavar devem funcionar entre as 8:00-22:00h", "Não é peritido conversas altas no corredor")}}'
//   }
// ]
