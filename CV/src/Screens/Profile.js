import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, Alert, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component {
    async onAddContact() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                let newPerson = {
                    emailAddresses: [{
                      label: "work",
                      email: "rodrigop.deangeli@gmail.com",
                    }],
                    phoneNumbers: [{
                        label: 'mobile',
                        number: '+5527999928105',
                      }],
                    displayName: "Rodrigo Pissinate De Angeli"
                  }
                   
                  Contacts.openContactForm(newPerson, (err, contact) => {
                    if (err) throw err;
                    // contact has been saved
                  })
            } else {
                Alert.alert('Ops', 'Permissão negada');
            }
        } catch (err) {
            Alert.alert('Ops', err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <ScrollView>
                        <View style={styles.body}>
                            <Image source={require('../assets/images/foto_perfil.jpg')} style={styles.image} />
                            <Topicos topico={'Contato'} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                                    <TouchableOpacity style={{ alignSelf: 'center', padding: 5, backgroundColor: '#94D8BD' }} onPress={() => this.onAddContact()}>
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

