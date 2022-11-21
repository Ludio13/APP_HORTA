import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Batata_Carne_Moida(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Escondidinho de Batata com Carne Moida</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                ESCONDIDINHO DE BATATA COM CARNE MOÍDA{'\n'}

INGREDIENTES{'\n'}
6 a 8 batatas cozidas e amassadas (purê){'\n'}
400 g de carne moída refogada com molho de tomate (tempere de acordo com a sua preferência){'\n'}
300 g de queijo mussarela{'\n'}

MODO DE PREPARO{'\n'}
1- Faça o purê de batata e separe.{'\n'}
2- Prepare a carne moída não muito molhada.{'\n'}
3- Em um refratário coloque uma camada de purê de batata, carne moída, um pouco do queijo, purê de batata, carne moída e o restante do queijo.{'\n'}
4- Leve ao forno até que doure o queijo.{'\n'}
5- Pode também ser colocado em cima um pouco de queijo parmesão.
              </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  