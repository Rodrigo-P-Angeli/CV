import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import Header from '../Components/Header'
import Topicos from '../Components/Topicos'



export default class Conhecimentos extends Component {
    state = {
        certificador: [
            {
                name: 'Curso React-Native',
                foto: require('../assets/images/Certificate_reactNative.jpg')
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} subtitle={'Certificados'} />
                    <ScrollView>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <FlatList
                                keyExtractor={() => `${Math.random()}`}
                                renderItem={({ item }) => {
                                    return (<View  style={{ alignItems: 'center', flex: 1 }}>
                                        <Topicos topico={item.name} />
                                        <ImageZoom
                                            cropWidth={400}//Dimensions.get('window').width}
                                            cropHeight={300}//Dimensions.get('window').height/4}
                                            imageWidth={400}
                                            imageHeight={300}>
                                            <Image source={item.foto} style={styles.image} />
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
})