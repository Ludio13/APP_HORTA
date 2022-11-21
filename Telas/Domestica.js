import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Domestica(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Domestica</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                Como produzir mudas? {'\n'}
Para a produção de nossas mudas podemos usar bandejas de isopor ou de plástico, próprias para a sua produção, e também substrato orgânico. 
Nas bandejas, plantamos algumas mudas de hortaliças, por exemplo, compradas ou ganhadas; e deixamos que germinem por um período de 25 a 30 dias.
Depois disso, retiramos as mudas (vigorosas e saudáveis) das bandejas, com todas as suas raízes e o substrato junto, na forma de um bloco, e as plantamos num canteiro.          
{'\n'}

Dicas para se fazer um canteiro{'\n'}

O canteiro deve ser feito em um local que receba luz do sol o dia todo, ou, pelo menos,  por umas quatro horas diárias; pois as plantas precisam de calor para ficar verdinhas e sadias.

Daí para frente, é preciso somente irrigar  o canteiro com água de boa qualidade, e sem jamais encharcá-lo. Caso apareça nele algum bichinho, antes de ele comer as suas plantas mate-o com as mãos.

Se for necessário, você pode usar também remédios naturais para controlar pragas e doenças de seu canteiro. Mas, atenção! Não há necessidade de usar veneno em seu canteiro!!! Vamos fazer uma horta orgânica, boa para a nossa saúde e para o meio ambiente.
{'\n'}
Que plantas escolher para o cultivo?{'\n'}

Porém, nem tudo pode ser plantado em espaços muito limitados, como canteiros, floreiras ou vasos. Por isso, antes de fazer o canteiro de nossa horta temos de escolher nossas plantas preferidas, as quais possamos cultivar em grande número e em pequenos espaços.

Entre as hortaliças, por exemplo, podemos escolher plantas como alface, rúcula, tomate e cenoura.

Já entre as plantas medicinais, temos aquelas para o preparo de deliciosos chás, como a erva-doce, a camomila, a hortelã e o capim-santo (também chamado capim-cidreira ou capim-limão); e, entre as plantas condimentares, temos o orégano, o coentro, a salsa, a cebolinha e o manjericão.  
{'\n'}
Plantando tudo junto, em consórcio! {'\n'}

Aliás, podemos cultivar diferentes espécies vegetais num mesmo espaço, o que chamamos de "consórcio de plantas".

O consórcio é uma técnica de plantio muito importante no cultivo orgânico de plantas, por aumentar a biodiversidade, que, por sua vez, é importante para o desenvolvimento e a sáude das plantas e do solo, bem como  para o controle de pragas e de doenças. 

Assim, num mesmo canteiro você pode plantar, juntas, hortaliças e plantas condimentares e aromáticas. Por exemplo: cebolinha com coentro, coentro com alface, cebolinha com hortelã e cebolinha com manjericão.

Em consórcios de hortaliças e de condimentares, você pode acrescentar também plantas medicinais, como capim-santo, em uma de suas extremidades, e até flores, para atrair os insetos bons.

Mas, para fazer esse consórcio, você deve ter o seguinte cuidado: não cultivar, juntas, plantas que podem fazer sombra uma na outra por muito tempo.

Finalmente, é importante, e prazeroso, cuidar sempre das plantas e garantir nosso alimento sem contaminações que possam prejudicar a nossa saúde!

Feito tudo isso, é só colher verduras e chás na área de serviço de nosso apartamento, ou no quintal de nossa casa, ali, bem pertinho da cozinha, onde vão ser preparadas para o consumo!
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  