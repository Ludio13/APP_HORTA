import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Sopa_Tomate(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Sopa de Tomate</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                Sopa de Tomate Fácil{'\n'}
                Ingredientes{'\n'}
1- ½ cebola grande picada{'\n'}
2- Azeite{'\n'}
3- 1kg de tomates bem maduros cortados ao meio{'\n'}
4- 500ml de água{'\n'}
5- 4 folhas pequenas de manjericão ou manjerona (pode ser manjericão seco de saquinho se não tiver fresco){'\n'}
6- 1 folha de louro{'\n'}
7- 2 colheres de chá de sal (ou a gosto){'\n'}
Instruções{'\n'}
1- Em fogo médio, refogue a cebola no azeite até murchar e ficar mais transparente. {'\n'}
2- Acrescente os tomates cortados, a água, as folhas de manjericão/manjerona e louro e o sal.{'\n'}
3- Ainda em fogo médio, conte 20 minutos após levantar fervura.{'\n'}
4- Desligue o fogo, deixe esfriar (essa parte é muito importante! Eu tentei bater no liquidificador ainda quente e… imagine o desastre), tire o louro (bater a sopa com a folha de louro pode deixá-la amarga) e bata no liquidificador.
{'\n'}5- Passe a sopa por uma peneira fina e volte à panela em fogo médio.{'\n'}
6- Acerte o sal (eu acrescentei mais uma colher de chá rasa de sal), mexa até levantar fervu{'\n'}                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  