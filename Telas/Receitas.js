import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Receitas(pros){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Receitas</Text>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} /*onPress={()=>pros.navigation.navigate('Sopa_Tomate')}*/ >
                    <Text style={Estilos.txt}>Sopa de Tomate</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} /*onPress={()=>pros.navigation.navigate('Repolho_Refogado')}*/>
                    <Text style={Estilos.txt}>Repolho Refogado</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} 
            /*onPress={()=>pros.navigation.navigate('Batata_Carne_Moida')}*/>
                    <Text style={Estilos.txt}>Escondidinho de Batata com Carne Moida</Text>
                </TouchableOpacity>             
            </View>
        </SafeAreaView>
    );
};
  