import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Tomate(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Tomate</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                Espaço {'\n'}
                Os   tomates   podem   ser   plantados   em   pequenos   vasos   e   canteiros,   não necessitando  de  grandes  áreas  para  que  a  planta  se  desenvolva  com saúde  e vigor.  No  caso  de  plantação  em  pequenas  hortas,  é  possível  produzir  tomates maiores  e  em  grandes  quantidades,  mas  para  isso  é  preciso  estar  atento  a algumas orientações básicas de como plantar tomate orgânico.
                {'\n'}
                Clima{'\n'}
O  tomate  é  um  alimento  com  origem  em  áreas  quentes,  portanto  não  suporta temperaturas muito frias. A temperatura ideal para cultivar o tomate é entre 20°C a 26°C, a partir dos 15°C já é possível cultivar tomateiros e obter belos frutos e a  temperatura  máxima  não  deve  ultrapassar  dos  35°C.  Em  regiões  que  não atendem  esses  requisitos  térmicos  o  tomate  pode  ser  cultivado  em  estufas.  No caso do produtor urbano, é possível utilizar pequenos vasos, mantê-los na região interna de suas casas e até mesmo construir pequenas estufas, para que o mal tempo não aflija a planta e nem prejudiquem seu desenvolvimento.
{'\n'}
Luminosidade{'\n'}
Com relação à incidência de luz, o tomateiro requer um pouco mais de atenção. É  preciso  que  a  planta  seja  exposta  à  alta  luminosidade  e  receba  luz  solar  de maneira direta por no mínimo seis horas todos os dias.
{'\n'}
Solo{'\n'}
Para  plantações  em  larga  escala,  recomenda-se  cuidar  do  solo pelo  menos  cinco meses  antes  da  implantação  da  cultura e  que  estas  áreas  não  tenham recebido plantas da família Solanaceae, como batata, jiló, pimentas, pimentão e berinjela. O solo  ideal  para  plantar  tomates  deve  possuir  pH  entre  5,5  a  7,  com boa  drenagem. A  camada  superficial  do  solo  deve  estar  sempre  bem  irrigada  e não  deve  ficar  encharcado  para  evitar  a  proliferação  de  doenças  e  demais pragas.  Um  solo  fértil  faz toda a diferença no desenvolvimento da planta.
{'\n'}
Irrigação{'\n'}
Os tomateiros  devem  estar  sempre  bem  irrigados,  no  entanto  a  irrigação em demasia prejudica o desenvolvimento da planta. A irrigação programada   pode   ser   uma boa  alternativa  para  quem  não  consegue  monitorar  a  plantação  em  tempo integral. Como o tomateiro ficará sempre exposto à luz solar, a taxa de evaporação  do  solo  e  de  transpiração  da  água  é  alta   e  o  tomateiro  exige  irrigação constante.
{'\n'}
Plantio{'\n'}
Na hora de plantar os tomates é preciso muita atenção por parte do produtor. É recomendado realizar pequenas mudas do tomateiro antes de colocá-lo no solo. Em uma sementeira, coloque de duas a cinco sementes em cada buraco, com cerca de 1cm de profundidade. Caso opte por tomates menores ou do tipo anão, faça o plantio diretamente no vaso ou na jardineira escolhida, nessa situação não há necessidade de transplantio.
{'\n'}
Transplante de muda{'\n'}
As mudas estarão prontas  para  o  transplante  quando  estiverem  com  aproximadamente  4 folhas consolidadas  e  após  o  fortalecimento  dos  pequenos  tomateiros  é  necessário transplantar as mudas. O espaçamento irá variar de acordo com a variedade de tomate, sendo que o espaçamento mínimo recomendado entre cada planta é de 50 cm, podendo chegar até 1,6 m. No caso de plantas anãs ou de tomate cereja o espaçamento de 30 cm é suficiente.
{'\n'}
Tratos culturais{'\n'}
É possível que conforme os tomateiros cresçam suas folhagens fiquem irregulares  e  as  plantas  comecem  a  perder  seu  vigor.  Nesse  caso,  utiliza-se  a  técnica de Tutoramento, onde estacas são colocadas para que a planta tenha uma orientação  de  crescimento.  Com  isso,  basta  podar  os  galhos  que  estiverem atrapalhando o desenvolvimento e liberar espaço para que ramos novos e saudáveis cresçam no lugar.
{'\n'}
Colheita{'\n'}
O período de colheita irá variar de acordo com o tipo de tomate plantado e com sua  forma  de  desenvolvimento.  Tomates  com  crescimento  regular  do  tipo determinado,  que  crescem  em  moitas  e  dão  frutos  em  menos  tempo,  poderão ser  colhidos  entre  7  e  8  semanas.  Já  os  tomates  maiores,  com  crescimento  do tipo indeterminado podem demorar entre 10 e 16 semanas para amadurecerem. A  colheita  dependerá  do  destino  do  tomate.  Caso  o  tomate  seja  revendido  para regiões próximas, é importante colhê-lo já maduro, com uma quantidade maior de   nutrientes.   Mas   caso   o   tomate   precise   percorrer   longas   distâncias, recomenda-se colher o tomate no começo do amadurecimento para que ele não estrague até chegar ao consumidor final.

               
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  