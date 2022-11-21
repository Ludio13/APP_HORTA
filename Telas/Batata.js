import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Batata(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Batata</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                - Compre as sementes de Batatas de viveiros de sua confiança. {'\n'}
- O solo, para o cultivo, deve possuir boa drenagem. Elimine as pedras e demais detritos que possam atrapalhar o bom desenvolvimento da cultura. Certifique-se que ele seja fértil, possua matéria orgânica em quantidade satisfatória e que ele seja rico em nitrogênio.
{'\n'}- Adubar a terra antes da plantação, cerca de um mês de antecedência. {'\n'}
- Ao irrigar, tenha o cuidado de não encharcá-lo. Não se esqueça de mantê-lo sempre úmido. O excesso de água facilita o surgimento de doenças na plantação. Suspenda a irrigação nas duas últimas semanas antes da colheita.
{'\n'}- Certificar que as Batatas que não apresentam sinais de doenças. O ideal é deixar as Batatas em ambiente bem iluminado até que os brotos (ou rebentos) cresçam (cada olho do tubérculo produz um broto ou rebento). As Batatas são plantadas quando os brotos atingem aproximadamente 2 cm de comprimento.
{'\n'}- As Batatas demoram aproximadamente entre 14 a 16 semanas a amadurecer e quando começam a ganhar flor é sinal que estão quase prontas a serem colhidas.
- As ramas, apresentando cor amarelada e estando os tubérculos estão se soltando com facilidade, indica-se que as batatas estão no ponto de serem colhidas.
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  