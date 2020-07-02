import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import Header from '../Components/Header'
import Exp from '../Components/Exp'

import axios from 'axios'
import Topicos from '../Components/Topicos'

export default class Experience extends Component {
    state = {
        experencias: [],
        outrasExperencias: [
            {
                id: 1,
                cargo: 'Atividade extracurrícular',
                company: 'AVES - Aero Vitória Espírito Santo',
                desc: 'Participação nas competições S.A.E Aerodesign a nível nacional, pela equipe Aero Vitória Espírito Santo (AVES) da Universidade Federal do Espírito Santo, projetando e construindo aeronaves rádio controladas que atendam aos requisitos da competição.',
                period: 'mai/2014 - dez/2016'
            },
            {
                id: 2,
                cargo: 'Atividade extracurrícular',
                company: 'Pesquisa: Fluidos não Newtonianos - Tixotrópicos',
                desc: 'Desenvolvimento de pesquisa em parceria da UFES com a UCL - Universidade Centro-Leste, visando análise de viscosidade de fluidos não newtonianos por meio de ondas ultrassônicas com validação dos resultados em um reômetro.',
                period: '2015 - 2016'
            },
        ]
    }
    componentDidMount() {
        this.loadExp()
    }
    async loadExp() {
        await axios.get('https://lambe-e09e6.firebaseio.com/exp.json')
            .then(res => { this.setState({ experencias: res.data }) })
            .catch(() => Alert.alert('Ops', 'Could not load, please verify your connection to internet'))
    }
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} subtitle={'Experiências'} />
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <ScrollView>
                        <View style={styles.topico}>
                            <Topicos topico={'Experiências comprovadas'} />
                        </View>
                        {this.state.experencias.map(item => <Exp key={Math.random()} {...item} />)}
                        <View style={styles.topico}>
                            <Topicos topico={'Outras experiências'} />
                        </View>
                        {this.state.outrasExperencias.map(item => <Exp key={Math.random()} {...item} />)}
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topico: {
        padding: 5,
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})