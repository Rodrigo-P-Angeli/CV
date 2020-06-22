import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <ScrollView>
                        <View style={styles.body}>
                            <Image source={require('../assets/images/foto_perfil.jpg')} style={styles.image} />
                            <Topicos topico={'Contato'} />
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <View style={styles.itens}>
                                        <Icon name={'phone'} size={15} />
                                        <Text style={styles.content}>+353 87 351 8144 // +55 27 99992 8105</Text>
                                    </View>
                                    <View style={styles.itens}>
                                        <Email name={'email'} />
                                        <Text style={styles.content}>rodrigop.deangeli@gmail.com</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ alignSelf: 'center', padding: 5, backgroundColor: '#94D8BD' }} onPress={() => { }}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'Solway-Light' }}>{'Add to\nContacts'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Topicos topico={'Endereço'} />
                            <Text style={styles.content}>
                                {'Rua: Laurentino Proença Filho, n° 247\nJardim da penha, Vitória - ES'}
                            </Text>
                            <Topicos topico={'Objetivo'} />
                            <Text style={styles.content}>
                                {'Este projeto tem como objetivo trazer uma breve'}
                                {' apresentação sobre mim e mostrar algumas funcionalidades e conhecimentos em React-Native '}
                                {'que possuo.'}
                            </Text>
                            <Topicos topico={'Um pouco sobre mim'} />
                            <Text style={styles.content}>
                                {'Autêntico, criativo, divertido. Interesse em aprender.\nMeus hobies são: surfar, tocar violão, assistir filmes, etc.'}
                                {'\n'}
                            </Text>
                        </View>
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
        fontSize: 15,
        fontFamily: 'Solway-Light'
    },
    image: {
        alignSelf: 'center',
    },
    itens: {
        paddingTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})

