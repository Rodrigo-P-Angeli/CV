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
import ShadowView from '../Components/ShadowView'

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
                <Header {...this.props} subtitle={'Perfil'} />
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <ScrollView style={{ paddingTop: 20, flex: 1 }}>
                        <ShadowView style={styles.shadowImage}>
                            <Image source={{ uri: this.state.fotoPerfil }} style={styles.image} />
                        </ShadowView>
                        <ShadowView>
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
                                <View style={styles.viewButton}>
                                    <TouchableOpacity style={styles.addContactTouch} onPress={() => this.onAddContact()}>
                                        <Text style={styles.addContactText}>{'Adicionar\nContato'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ShadowView>
                        <ShadowView>
                            <Topicos topico={'Endereço'} />
                            <Text style={styles.content}>
                                {this.state.adress}
                            </Text>
                        </ShadowView>
                        <ShadowView>
                            <Topicos topico={'Objetivo'} />
                            <Text style={styles.content}>
                                {this.state.objetivo}
                            </Text>
                        </ShadowView>
                        <ShadowView>
                            <Topicos topico={'Um pouco sobre mim'} />
                            <Text style={styles.content}>
                                {this.state.desc}
                            </Text>
                        </ShadowView>
                        <View style={{ height: 30 }} />
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
    content: {
        fontSize: 15,
        fontFamily: 'Roboto-Light',
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
    shadowImage: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 220,
        width: 200,
    },
    viewButton: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    addContactTouch: {
        alignSelf: 'center',
        padding: 5,
        backgroundColor: '#005131'
    },
    addContactText: {
        alignSelf: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
})

