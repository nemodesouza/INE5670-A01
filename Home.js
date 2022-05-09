import * as React from "react";
import {
  ImageBackground,
  Image,
  BackHandler,
  Button,
  StyleSheet,
  View,
} from "react-native";
import apartmentList from "./mock/apartments.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <View style={styles.topBox}>
            <Image
              style={styles.logoTop}
              source={require("./assets/logo.png")}
            />
          </View>
          <View style={styles.container}></View>
          <View style={styles.button}>
            <Button
              title="Ver Apartamentos"
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  logo: {
    height: 160,
    width: 160,
  },
  logoTop: {
    padding: 160,
    alignItems: "center",
    height: "50%",
    width: "50%",
    opacity: 0.7,
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
    color: "white",
    padding: 15,
  },
  topBox: {
    alignItems: "center",
  },
});
