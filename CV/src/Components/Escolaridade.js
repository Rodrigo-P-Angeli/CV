import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


export default class Escolaridade extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        backgroundColor: 'white',
        alignSelf: 'center',
    }
})