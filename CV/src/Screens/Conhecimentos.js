import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'

export default class Conhecimentos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props}/>
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
    }
})