import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground, FlatList, Alert, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Axios from 'axios'

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import ShadowView from '../Components/ShadowView'


export default class Conhecimentos extends Component {
    state = {
        certificador: []
    }

    componentDidMount() {
        this.loadCertificados()
    }

    loadCertificados() {
        Axios.get('https://lambe-e09e6.firebaseio.com/certificados.json')
            .then(res => this.setState({ certificador: res.data }))
            .catch(err => Alert.alert('Erro!', 'Por favor, verifique sua conecção com a internet'))
    }

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} title={'Certificados '} />
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <ScrollView>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <FlatList
                                keyExtractor={() => `${Math.random()}`}
                                renderItem={({ item }) => {
                                    return (<ShadowView style={styles.item}>
                                        <Topicos topico={item.name} />
                                        <View style={{ height: 5 }} />
                                        <ImageZoom 
                                            cropWidth={Dimensions.get('window').width}
                                            cropHeight={Dimensions.get('window').height/3}
                                            imageWidth={Dimensions.get('window').width}
                                            imageHeight={Dimensions.get('window').height/3}>
                                            <Image source={{ uri: item.foto }} style={styles.image} />
                                        </ImageZoom>
                                    </ShadowView>)
                                }}
                                data={this.state.certificador} />
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
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 300,
        width: 400,
    },
    backround: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
    },
    item: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})