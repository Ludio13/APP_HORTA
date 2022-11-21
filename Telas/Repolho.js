import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Repolho(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Repolho</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                1 – Fique atento ao clima {'\n'}
Pronto para começar a plantar repolho em casa? Então, fique atento ao primeiro passo: verificar o clima, ou seja, a estação em que pretende começar o cultivo da hortaliça.

Os repolhos preferem climas frios. Inclusive, existem plantações que aguentam temperaturas de -10ºC, porém, não por muito tempo. Agora, se você mora em um local quente, não se preocupe! Ainda assim, é possível ter um jardim com repolhos saudáveis — apenas se lembre que eles se desenvolvem melhor no inverno.
{'\n'}
2 – Verifique a iluminação{'\n'}
A iluminação é essencial para o crescimento saudável dos repolhos. Isso porque essa hortaliça precisa de luz intensa e constante, mas não direta, para não danificar as folhas.

Uma dica é deixá-la em “meia-sombra” por cerca de seis horas diárias, garantindo o bom desenvolvimento. Fácil e interessante, não é mesmo?
{'\n'}
3 – Prepare o solo{'\n'}
Mesmo que você compre terra para o cultivo, é importante ter um cuidado todo especial com o solo. Isso porque ele precisa estar em contato direto com a água. Se você não tiver como drená-lo, lembre-se que o líquido não pode ficar parado, já que a concentração pode prejudicar a planta, criando fungos.

Vale lembrar que o pH deve ficar entre 6 e 7,5, principalmente se você estiver interessado em colher grandes mudas para aproveitar com a família.
{'\n'}
4 – Mantenha a irrigação constante{'\n'}
A irrigação é muito importante para o crescimento saudável do pé de repolho. Por isso, é essencial criar o costume de conferir se a terra está com uma aparência mais escura.

A frequência das regas das mudas de repolho pode mudar de uma região para outra. Assim, se você nunca cuidou de hortaliças, lembre-se de sempre checar a umidade do solo.
{'\n'}
5 – Transplante as mudas {'\n'}
Como o plantio do repolho costuma ser feito por sementes, você terá que transplantar a hortaliça para um local de cultivo quando ela estiver com 10 ou 15 cm. Mas lembre-se de plantá-la com 2 cm de profundidade para não machucar as raízes.
               
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  