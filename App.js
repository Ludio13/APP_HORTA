import React, {useState} from 'react';
import {StyleSheet,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';
import Home from './Telas/Home.js';
import Horta from './Telas/Horta.js';
import Tradicional from './Telas/Tradicional.js';
import Mini from './Telas/Mini.js';
import Domestica from './Telas/Domestica.js';
import Plantar from './Telas/Plantar.js';
import Tomate from './Telas/Tomate.js';
import Repolho from './Telas/Repolho.js';
import Batata from './Telas/Batata.js';
import Receitas from './Telas/Receitas.js';
import Sopa_Tomate from './Telas/Sopa_Tomate.js';
import Repolho_Refogado from './Telas/Repolho_Refogado.js';
import Batata_Carne_Moida from './Telas/Batata_Carne_Moida.js';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();
//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Horta" component={Horta} />
      <Stack.Screen name="Tradicional" component={Tradicional} />
      <Stack.Screen name="Mini" component={Mini} />
      <Stack.Screen name="Domestica" component={Domestica} />

      <Stack.Screen name="Plantar" component={Plantar} />
      <Stack.Screen name="Tomate" component={Tomate} />
      <Stack.Screen name="Repolho" component={Repolho} />
      <Stack.Screen name="Batata" component={Batata} />

      <Stack.Screen name="Receitas" component={Receitas} />
      <Stack.Screen name="Sopa_Tomate" component={Sopa_Tomate} />
      <Stack.Screen name="Repolho_Refogado" component={Repolho_Refogado} />

    </Stack.Navigator>
    </NavigationContainer>
    //<Home/>
  );
};
export default App;
