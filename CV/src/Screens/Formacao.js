import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import ShadowView from '../Components/ShadowView'
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Escolaridade from '../Components/Escolaridade'

const logoUfes = require('../assets/images/logo-UFES.png')
const logoIfes = require('../assets/images/logo-IFES.png')

export default class Formation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} subtitle={'Formação Acadêmica'} />
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <ScrollView >
                        <ShadowView>
                            <Escolaridade
                                image={logoUfes}
                                escola={'Universidade Federal do Espírito Santo'}
                                periodo={'mar/2013 - jul/2018'}
                                curso={'Engenharia Mecânica'} />
                        </ShadowView>
                        <ShadowView>
                            <Escolaridade
                                image={logoIfes}
                                escola={'Instituto Federal do Espírito Santo'}
                                periodo={'fev/2009 - dez/2012'}
                                curso={'Técnico Mecânica integrado ao ensino médio'} />
                        </ShadowView>
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
    backround: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
    }
})