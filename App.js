import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/home/home.jsx';
import CadDespesa from './src/screens/cad-desp/cad-desp.jsx'
import Config from 'react-native-config';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='CadDespesa' component={CadDespesa} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home />
  );
}