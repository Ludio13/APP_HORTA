import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Repolho_Refogado(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Repolho Refogado</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                INGREDIENTES{'\n'}
1 repolho lavado e cortado em fatias finas{'\n'}
1 dente de alho{'\n'}
2 colheres de azeite doce{'\n'}
1 lata de ervilha{'\n'}
1 lata de milho{'\n'}
Salsinha a gosto{'\n'}
Sal a gosto{'\n'}

MODO DE PREPARO{'\n'}
1- Em uma panela, coloque o azeite e o alho batido e deixe aquecer levemente.{'\n'}

2- Acrescente o repolho e mexa até murchar um pouco.{'\n'}

3- Salpique sal e coloque o milho, a ervilha e a salsinha picada. Abafe um pouco com a tampa e desligue o fogo.{'\n'}

4- Pode ser servido com arroz branco e frango assado.{'\n'}
              </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  