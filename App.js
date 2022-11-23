import  React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TelaBoasVindas from './Telas/TelaBoasVindas';
import TelasListagem from './Telas/TelasListagem';
import TelaCadastro from './Telas/TelaCadastro';
import TelaVizualizacao from './Telas/TelaVizualizacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='BoasVindas'>
        <Stack.Screen
          name="BoasVindas"
          component={TelaBoasVindas}
          options={{ title: 'Boas-Vindas!' }}
        />
        <Stack.Screen name="Listagem" component={TelasListagem} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Vizualizacao" component={TelaVizualizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
