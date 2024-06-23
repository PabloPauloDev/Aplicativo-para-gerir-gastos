import { View, Text, Image } from 'react-native';
import Home from './src/screens/home/home.jsx';
import CadDespesa from './src/screens/cad-desp/cad-desp.jsx'
import icons from './src/constants/icons.js';


export default function App() {
  return (
    <View>
      <CadDespesa />
    </View>
  );
}