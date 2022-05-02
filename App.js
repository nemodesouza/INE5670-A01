import HomeScreen from './Home';
import ApartmentListScreen from './components/apartmentList';
import ApartmentDetailsScreen from './components/apartmentDetail';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ContactList: {screen: ApartmentListScreen},
  ContactDetails: {screen: ApartmentDetailsScreen},
});

const App = createAppContainer(MainNavigator);
export default App;
