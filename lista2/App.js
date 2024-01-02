import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
let numeros = [1, 3, 5, 7, 0, 9];

export default function App() {
  numeros.sort((a, b) => a - b);
  console.log('Lista ordenada:', numeros);

  // Remover o primeiro número
  numeros.shift();
  console.log('Lista após remover o primeiro número:', numeros);

  // Inverter a ordem da lista
  numeros.reverse();
  console.log('Lista invertida:', numeros);
}