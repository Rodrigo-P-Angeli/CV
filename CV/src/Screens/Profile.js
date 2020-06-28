import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
    PermissionsAndroid
} from 'react-native';

import { Container, Body, Content, Text } from 'native-base'

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
            <Container>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <Content style={styles.body}>
                        <Image source={{ uri: this.state.fotoPerfil }} style={styles.image} />
                        <Topicos topico={'Contato'} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <View style={styles.itens}>
                                    <Icon name={'phone'} size={15} />
                                    <Text style={styles.content}>{this.state.phone}</Text>
                                </View>
                                <View style={styles.itens}>
                                    <Email name={'email'} />
                                    <Text style={styles.content}>{this.state.email}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ alignSelf: 'center', padding: 5, backgroundColor: '#94D8BD' }} onPress={() => this.onAddContact()}>
                                    <Text style={{ alignSelf: 'center' }}>{'Add to\nContacts'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Topicos topico={'Endereço'} />
                        <Text style={styles.content}>
                            {this.state.adress}
                        </Text>
                        <Topicos topico={'Objetivo'} />
                        <Text style={styles.content}>
                            {this.state.objetivo}
                        </Text>
                        <Topicos topico={'Um pouco sobre mim'} />
                        <Text style={styles.content}>
                            {this.state.desc}
                            {'\n'}
                        </Text>
                    </Content >
                </ImageBackground>
            </Container >
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
        fontSize: 15,
        textAlign: 'justify',
    },
    image: {
        alignSelf: 'center',
        height: 220,
        width: 165,
        resizeMode: 'contain',
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

