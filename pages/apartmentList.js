import * as React from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ContactListScreen extends React.Component {
  static navigationOptions = {
    title: "Lista de Apartamentos",
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const isFavorite = navigation.getParam("favorites");
    const apartments = JSON.parse(
      await this.getApartmentListStorage(isFavorite)
    );

    this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({
        isLoading: false,
        apartments,
      });
    });
  }

  // Função para obter as listas de apartamentos do AsyncStorage.
  getApartmentListStorage(isFavorite) {
    if (isFavorite) return AsyncStorage.getItem("apartment_list_favorited");
    else return AsyncStorage.getItem("apartment_list");
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    const {navigate} = this.props.navigation;
    let listSection;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }

    // Retorna a lista de apartamentos nova com o favorito atualizado.
    const updateListWithNewFavorite = (id) => {
      let newList = [];
      this.state.apartments.map((item) => {
        if (item._id === id) {
          item.isFavorited = !item.isFavorited;
        }
        newList.push(item);
      });
      return newList;
    };

    // Atualiza as listas no AsyncStorage.
    const updateListStorage = (id) => {
      const newList = updateListWithNewFavorite(id);

      AsyncStorage.setItem("apartment_list", JSON.stringify(newList));
      const favoritesList = newList.filter((item) => item.isFavorited);
      AsyncStorage.setItem(
        "apartment_list_favorited",
        JSON.stringify(favoritesList)
      );
      this.setState({apartments: newList});
    };

    const Item = ({title}) => (
      <View style={styles.item}>
        <View>
          <Image style={styles.stretch} source={{uri: title.picture}}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>{title.name}</Text>
          <Icon.Button
            iconStyle={{marginRight: 0}}
            name={title.isFavorited ? "star" : "star-o"}
            backgroundColor="#8c8c8c"
            onPress={() => updateListStorage(title._id)}
          ></Icon.Button>
        </View>
      </View>
    );

    if (!this.state.apartments) {
      listSection = (
        <View styles={styles.container}>
          <Text>Não encontramos nenhum apartamento aqui</Text>
          <Button title="Voltar" onPress={() => navigate("Home")}/>
        </View>
      );
    } else {
      listSection = (
        <FlatList
          keyExtractor={(title) => title._id.toString()}
          data={this.state.apartments}
          ListFooterComponent={
            <Button title="Voltar" onPress={() => navigate("Home")}/>
          }
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigate("ApartmentDetails", {apartment: item})}
            >
              <View>
                <Item key={item.index} title={item}/>
              </View>
            </TouchableOpacity>
          )}
        />
      );
    }

    return (
      <SafeAreaView styles={styles.container}>
        {listSection}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#e5e5e5",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  container: {
    padding: 15,
    paddingBottom: 18,
  },
  bottomSpace: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  stretch: {
    height: 200,
    resizeMode: "cover",
  },
  group: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
