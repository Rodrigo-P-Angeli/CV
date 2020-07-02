import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground, FlatList, Alert } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Axios from 'axios'

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'



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
                                    return (<View style={styles.item}>
                                        <Topicos topico={item.name} />
                                        <View style={{ height: 15 }} />
                                        <ImageZoom style={{ flex: 1, }}
                                            cropWidth={400}//Dimensions.get('window').width}
                                            cropHeight={300}//Dimensions.get('window').height/4}
                                            imageWidth={400}
                                            imageHeight={300}>
                                            <Image source={{ uri: item.foto }} style={styles.image} />
                                        </ImageZoom>
                                    </View>)
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
    body: {
        padding: 10
    },
    content: {
        paddingLeft: 10,
        paddingTop: 10,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 300,
        width: 400,
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    item: {
        alignItems: 'center',
        flex: 1,

    }
})