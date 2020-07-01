import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
    PermissionsAndroid
} from 'react-native';

import Contacts from 'react-native-contacts';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'

export default class Profile extends Component {
    state = {}
    loadInfo() {
        axios.get('https://lambe-e09e6.firebaseio.com/profile.json')
            .then(res => this.setState(res.data))
            .catch(err => Alert.alert('Ops...', err))
    }
    componentDidMount() {
        this.loadInfo()
    }
    async onAddContact() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                let newPerson = {
                    emailAddresses: [{
                        label: "work",
                        email: this.state.email,
                    }],
                    phoneNumbers: [{
                        label: 'mobile',
                        number: this.state.phone,
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
                            <View style={{ padding: 10, alignItems: 'center' }}>
                                <View elevation={5} style={styles.shadowImage}>
                                    <Image source={{ uri: this.state.fotoPerfil }} style={styles.image} />
                                </View>
                            </View>
                            <View style={{ paddingBottom: 10 }}>
                                <View elevation={5} style={styles.cont}>
                                    <Topicos topico={'Contato'} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <View style={styles.itens}>
                                                <Icon name={'phone'} size={15} />
                                                <Text style={[styles.content, { paddingLeft: 10 }]}>{this.state.phone}</Text>
                                            </View>
                                            <View style={styles.itens}>
                                                <Email name={'email'} />
                                                <Text style={[styles.content, { paddingLeft: 10 }]}>{this.state.email}</Text>
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end', }}>
                                            <TouchableOpacity style={{ alignSelf: 'center', padding: 5, backgroundColor: '#005131' }} onPress={() => this.onAddContact()}>
                                                <Text style={{ alignSelf: 'center', fontFamily: 'Solway-Light', color: 'white' }}>{'Adicionar\nContato'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ paddingBottom: 10 }}>
                                <View elevation={5} style={styles.cont}>
                                    <Topicos topico={'Endereço'} />
                                    <Text style={styles.content}>
                                        {this.state.adress}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ paddingBottom: 10 }}>
                                <View elevation={5} style={styles.cont}>
                                    <Topicos topico={'Objetivo'} />
                                    <Text style={styles.content}>
                                        {this.state.objetivo}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ paddingBottom: 10 }}>
                                <View elevation={5} style={styles.cont}>
                                    <Topicos topico={'Um pouco sobre mim'} />
                                    <Text style={styles.content}>
                                        {this.state.desc}
                                        {'\n'}
                                    </Text>
                                </View>
                            </View>
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
        padding: 10,
    },
    content: {
        paddingRight: 10,
        fontSize: 15,
        fontFamily: 'Solway-Light',
        textAlign: 'justify',
    },
    image: {
        resizeMode: 'contain',
        height: 220,
        width: 185,

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
    },
    cont: {
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
    },
    shadowImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 220,
        width: 200,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
    }
})

