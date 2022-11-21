import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Tradicional(){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Tradicional</Text>
            </View>
            <ScrollView style={Estilos.txt}>
                <Text style={Estilos.txt}>
                1 – Planejamento da horta {'\n'}
Antes de começar uma horta é fundamental planejar como essa área será utilizada. O primeiro passo é definir se ela será uma horta doméstica, com fins comerciais, comunitária ou algum outro tipo de espaço. Depois, é preciso verificar a disponibilidade da área, de ferramentas e de insumos para que o trabalho possa começar de fato.
Anote tudo o que você já tem e o que ainda falta para a produção, como enxada, fertilizantes, mudas ou sementes, regadores e outros itens importantes para iniciar a horta. Se você tem animais, avalie a necessidade de cercar o espaço, o que pode ser feito somente com telas de arame ou, em caso de animais que cavam por baixo da cerca, com a construção de uma mureta de concreto.
{'\n'}
2 – Avaliação do terreno{'\n'}
Em geral, um bom terreno para começar uma horta deve ser plano, receber iluminação solar e vento moderado, estar perto de uma fonte de água e não reter a água da chuva ou da irrigação, já que isso pode causar a podridão das raízes. Antes de plantar, é necessário retirar formigueiros, grama, areia, pedras e outros tipos de detritos, como restos de construção e lixo.
Faça um rascunho para planejar o tamanho dos canteiros e das ruas. O canteiro, geralmente, tem largura entre 90 e 120 cm. Já as ruas devem medir de 30 a 50 cm de largura para que a passagem de pessoas e equipamentos seja feita com facilidade. Procure saber o espaçamento recomendado para a produção das hortaliças que você deseja cultivar ao determinar o tamanho dos canteiros.
{'\n'}
3 – Ferramentas e insumos{'\n'}
Para começar uma horta, você vai precisar de algumas ferramentas. As mais comuns são enxada, pá, tesoura de poda, colher de transplante, pulverizador, carrinho de mão e regador, mas tudo depende do tamanho da sua horta e do que você pretende cultivar. Todos esses itens devem ser lavados e bem secados após o uso, para evitar a ferrugem e aumentar a sua vida útil.

Você também pode precisar de outros utensílios, como plaquinhas para identificar as culturas, telas e arames para cercar a horta, filme plástico ou sombrite para fazer a cobertura das plantas, entre outras coisas. O ideal é que tudo isso seja planejado antes de começar uma horta para reduzir os custos, mas nada impede que você compre esses itens durante o plantio.
{'\n'}
4 – Preparação do solo{'\n'}
Preparar o solo para o plantio é essencial: ele não deve ser compactado e nem ter muito cascalho, pois são características difíceis de corrigir. O ideal é que seja solto, o que facilita o trabalho e é melhor para a nutrição das plantas. Depois de limpar o terreno, é preciso revolver o solo com enxada para diminuir a compactação e permitir o nivelamento dos canteiros.

Esse é o chamado plantio convencional, mas você também pode optar pelo plantio direto, em que as mudas ou sementes são acomodadas sobre a cobertura morta ― essa técnica só não é recomendada para a produção de tubérculos. É possível fazer a cobertura com materiais de outra área, como palha e grama, ou com o cultivo de plantas de cobertura no local, cortando-as após o crescimento.
{'\n'}
5 – Escolha das hortaliças{'\n'}
A escolha das hortaliças depende de fatores como a área disponível, o clima da região, a época do ano e o tempo disponível para os cuidados. Algumas espécies que têm fácil cultivo e produzem bem em praticamente qualquer clima e região do país são a salsa, a hortelã, o manjericão, as abóboras, a batata-doce, o quiabo e as pimentas.

Você pode optar pela compra de sementes em latas ou pacotes, em que é possível ter mais confiança em relação à qualidade e à garantia do produto em comparação com as sementes a granel. Outra opção é comprar mudas, avaliando se elas não têm manchas nas folhas ou galhas nas raízes, o que pode acabar trazendo pragas e doenças para toda a horta.
{'\n'}
6 – Semeadura e plantio {'\n'}
É possível fazer a semeadura em sulcos ou em covas. No sulco, as sementes devem ser depositadas uma ao lado da outra em linha contínua. Já as covas devem receber de 3 a 5 sementes, posicionadas no centro, mas não muito próximas umas das outras. Depois, basta cobri-las com uma camada fina de terra. Lembre-se que algumas espécies devem ser semeadas em bandejas em vez da terra.

Procure plantar as mudas em dias chuvosos ou em dias mais frescos e molhe o local antes de colocar a planta. Se for uma muda com raízes, posicione-as bem distribuídas pela cova. Já se for com torrão, coloque todo ele dentro da cova e evite despedaçá-lo. Em seguida, complete a cova com terra e faça a compactação do solo ao redor para que as raízes se fixem melhor à terra.
{'\n'}
7 – Adubação {'\n'}
A grande maioria dos terrenos precisa de adubação para começar uma horta, a não ser aqueles que já são naturalmente férteis. Para saber se o solo é equilibrado ou se necessita de algum nutriente, deve-se fazer uma análise química dele, processo que aponta qual é o teor de cada elemento em uma determinada área.

Com base nisso, faz-se a adubação de plantio e de cobertura, realizada durante o crescimento das plantas. É possível usar fertilizantes orgânicos ou químicos. O importante é que as formulações contenham os nutrientes que o seu solo precisa e que você tenha atenção aos sinais da falta deles para repetir a aplicação, como manchas amarelas e engruvinhamento das folhas.
{'\n'}            
                </Text>
            </ScrollView>
            
        </SafeAreaView>
    );
};
  