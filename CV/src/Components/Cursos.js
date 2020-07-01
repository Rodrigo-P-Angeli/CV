import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default class Curso extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: this.props.image }} />
                <Text style={styles.curso}>{this.props.curso}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    curso: {
        fontFamily: 'Solway-Light',
        fontSize: 20,
    }
})