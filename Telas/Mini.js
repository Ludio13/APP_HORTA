import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Mini(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Mini</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
               1- Defina o local certo para sua hortinha {'\n'}
O primeiro passo para montar uma mini-horta é escolher o local adequado. A princípio, boas opções são a cozinha e a varanda. Assegure-se de que o ambiente é acessível, que tem água disponível e uma boa incidência de luz solar e calor — pelo menos 4 horas por dia. A recomendação é que a horta seja voltada para o norte, a fim de aproveitar melhor o sol.
{'\n'}
2- Escolha as espécies de plantas {'\n'}
Definido o ambiente em que sua mini-horta será montada, é hora de escolher as espécies. Se o espaço é compacto, priorize as plantas de pequeno porte, como agrião, manjericão, hortelã, manjerona, alecrim, orégano, sálvia, salsa, cebolinha, louro e tomilho. Já se você dispõe de um ambiente um pouco maior, hortaliças como alface, beterraba, pepino, abobrinha e espinafre são bem-vindas,
{'\n'}
3- Adquira os recipientes para a montagem
Depois de escolher o local da horta e as espécies a serem cultivadas, chegou a hora de providenciar os recipientes para o plantio, que devem ter dimensões proporcionais ao espaço disponível. Então nada de escolher vasos muito grandes para ambientes pequenos, combinado? Dê preferência a vasos pequenos, canteiros e jardineiras. Certifique-se de que eles possuem furos para a drenagem do excesso de água, a fim de garantir o bom enraizamento e evitar que as raízes apodreçam.
{'\n'}
4-Parta para o plantio {'\n'}
Para plantar as hortaliças, misture a terra com o composto orgânico e, em seguida, cubra o recipiente escolhido até a borda. Cave um pouco a terra e plante a muda ou semente. Aí é só acrescentar terra adubada para fechar o buraco!
{'\n'}
5-Cuide da manutenção da mini-horta {'\n'}
Saiba desde já: ter uma hortinha caseira demanda dedicação. Por isso, não basta simplesmente plantar as hortaliças. Também é preciso cultivá-las com carinho! E por mais que os cuidados dependam de cada espécie, podemos dar uma regra geral: as plantinhas devem ser regadas com frequência, só evitando encharcá-las — pois o excesso de água as enfraquece e aumenta a propensão ao surgimento de doenças.
Outro cuidado importante consiste em adubar a terra uma vez por mês. Quanto à poda, ela será necessária sempre que as folhas murcharem ou apodrecerem. Para evitar pragas e insetos, fuja de inseticidas agressivos, dando preferência a repelentes naturais, como a citronela.
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  