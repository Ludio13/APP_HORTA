import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

//const Stack = createStackNavigator();
export default function Home(pros){
    
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>APP Horta em Casa</Text>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} /*onPress={()=>pros.navigation.navigate('Horta')}*/>
                    <Text style={Estilos.txt} >Criar Horta</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} /*onPress={()=>pros.navigation.navigate('Plantar')}*/>
                    <Text style={Estilos.txt}>Plantar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} /*onPress={()=>pros.navigation.navigate('Receitas')}*/>
                    <Text style={Estilos.txt}>Receitas</Text>
                </TouchableOpacity>             
            </View>
        </SafeAreaView>
    );
};
  