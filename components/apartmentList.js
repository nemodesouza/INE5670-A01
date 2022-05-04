import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {Image} from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import apartmentLit from '../mock/apartments.json'

export default class ContactListScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista de Apartamentos',
  };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount(){
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
        this.setState({
          isLoading: false,
          apartments: apartmentLit,
        });
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const Item = ({ title }) => (
      <View style={styles.item}>
        <View>
          <Image style={styles.stretch} source={title.picture} />
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>{ title.name }</Text>
        </View>
      </View>
    );

    const {navigate} = this.props.navigation;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.apartments}
          renderItem={({item}) =>
            <TouchableOpacity onPress={ () => navigate('ApartmentDetails', {apartment: item})}>
              <View>
                <Item title={item} />
              </View>
            </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigate('Home')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#e5e5e5',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0e0e0e'
  },
  container: {
    padding: 15
  },
  stretch: {
    height: 200,
    resizeMode: 'cover',
  },
  group: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
