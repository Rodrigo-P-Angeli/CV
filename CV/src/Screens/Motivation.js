import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Linking, TouchableOpacity } from 'react-native';

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'

export default class Conhecimentos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} subtitle={'Motivação'} />
                    <ScrollView>
                        <Topicos topico={'Motivação do trabalho'} />
                        <Text style={styles.content}>
                            {'\nDurante a pandemia, decidi começar a estudar React-Native para tentar realizar um'}
                            {' projeto pessoal, percebi ao longo dos estudos que o mercado estava precisando de pessoas '}
                            {'com o conhecimento de React-Native. Então, decidi aprofundar meus estudos para tentar me preparar'}
                            {' para ser um futuro profissional na área.\n'}
                            {'\nEste projeto tem o papel de mostrar alguns de meus conhecimentos do assunto, e também serviu '}
                            {'para que eu aprendesse as bibliotecas atualizadas, uma vez que o curso que fiz trazia versões '}
                            {'muito antigas como ex.: 2.X para a react-navigation, e estamos usando a 5.X neste projeto.'}
                            {'\nTambém serviu para que eu pudesse aumentar meu portifólio e aprender a trabalhar em conjunto com o GitHub.\n'}
                        </Text>
                        <TouchableOpacity style={styles.link} onPress={() => { Linking.openURL('https://github.com/Rodrigo-P-Angeli/CV/tree/master/CV') }}>
                            <Text style={styles.textLink}>Link para Git do Projeto</Text>
                        </TouchableOpacity>
                        <Topicos topico={'Descrição do projeto'} />
                        <Text style={styles.content}>
                            {'\nEste projeto tem por caracteristica mostrar minha capacidade criar um App com a biblioteca mais atual de navegação '}
                            {'do react-navigation, assim como apresentar meus outros projetos do meu GitHub.'}
                            {' Usei o bottom tab navigation e o drawer para navegar entre as tela como é observado, e o switch navigation'}
                            {' para navegar na splash screen. '}
                            {'\n\nO firebase do Google também foi usado no projeto para que ao longo do tempo ele esteja sempre atualizado e não'}
                            {' seja necessário lançar novas versões do aplicativo, as experiências, cursos e certificados são obtidos '}
                            {'diretamente do servidor\n'}
                        </Text>
                        <TouchableOpacity style={styles.link} onPress={() => { Linking.openURL('https://github.com/Rodrigo-P-Angeli/') }}>
                            <Text style={styles.textLink}>Link para meu GitHub{'\n'}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        padding: 10
    },
    content: {
        paddingLeft: 10,
        paddingTop: 10,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 300,
        width: 400,
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    content: {
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: 'Solway-Light'
    },
    link: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    textLink: {
        fontFamily: 'Solway-Medium',
        color: 'blue',
        fontSize: 15,
    }
})