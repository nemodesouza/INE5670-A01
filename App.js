import HomeScreen from './Home';
import ApartmentListScreen from './pages/apartmentList';
import ApartmentDetailsScreen from './pages/apartmentDetail';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ApartmentList: {screen: ApartmentListScreen},
  ApartmentDetails: {screen: ApartmentDetailsScreen},
});

const App = createAppContainer(MainNavigator);
export default App;
