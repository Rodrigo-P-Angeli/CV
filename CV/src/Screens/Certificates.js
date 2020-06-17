import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import ImageZoom from 'react-native-image-pan-zoom';

export default class Conhecimentos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} subtitle={'Certificados'} />
                <ScrollView>
                    <View>
                        <ImageZoom
                            cropWidth={400}//Dimensions.get('window').width}
                            cropHeight={300}//Dimensions.get('window').height/4}
                            imageWidth={400}
                            imageHeight={300}>
                            <Image source={require('../assets/images/Certificate_reactNative.jpg')} style={styles.image} />
                        </ImageZoom>
                        <ImageZoom
                            cropWidth={400}//Dimensions.get('window').width}
                            cropHeight={300}//Dimensions.get('window').height/4}
                            imageWidth={400}
                            imageHeight={300}>
                            <Image source={require('../assets/images/Certificate_reactNative.jpg')} style={styles.image} />
                        </ImageZoom>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
    }
})