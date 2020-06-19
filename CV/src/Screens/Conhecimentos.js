import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'

export default class Conhecimentos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <FlatList/>
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
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})