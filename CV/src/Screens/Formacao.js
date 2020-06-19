import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Escolaridade from '../Components/Escolaridade'

const logoUfes = require('../assets/images/logo-UFES.png')
const logoIfes = require('../assets/images/logo-IFES.png')

export default class Formation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <Escolaridade
                    image={logoUfes} 
                    periodo={'mar/2013 - jul/2018'}
                    curso={'Engenharia Mecânica'}/>
                <Escolaridade
                    image={logoIfes} 
                    periodo={'fev/2009 - dez/2012'}
                    curso={'Técnico Mecânica integrado ao ensino médio'}/>
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
    }
})