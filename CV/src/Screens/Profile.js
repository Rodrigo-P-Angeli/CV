import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <ScrollView>
                    <View style={styles.body}>
                        <Image source={require('../assets/images/foto_perfil.jpg')} style={styles.image} />
                        <Topicos topico={'Contato'} />
                        <View style={styles.itens}>
                            <Icon name={'phone'} size={15}/>
                            <Text style={styles.content}>+353 87 351 8144 // +55 27 99992 8105</Text>
                        </View>
                        <View style={styles.itens}>
                            <Email name={'email'} />
                            <Text style={styles.content}>rodrigop.deangeli@gmail.com</Text>
                        </View>
                        <Topicos topico={'Endereço'} />
                        <Text style={styles.content}>
                            Rua: Laurentino Proença Filho, n° 247
                        </Text>
                        <Text style={styles.content}>
                            Jardim da penha, Vitória - ES
                        </Text>
                        <Topicos topico={'Um pouco sobre mim'} />
                        <Text style={styles.content}>
                            Altêntico, criativo, divertido. Muito focado em aprender.
                            Meus hobies são: surfar, tocar violão, assistir filmes, até mesmo jogar video games.
                        </Text>
                    </View>
                </ScrollView>
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
    },
    image: {
        alignSelf: 'center',
    },
    itens: {
        paddingTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
    }
})

