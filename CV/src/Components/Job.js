import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

export default class Job extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(this.props.link)}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.link}>{this.props.link}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    name: {
        fontFamily: 'Solway-Bold',
        fontSize: 20,
        paddingBottom: 10,
    },
    link: {
        fontFamily: 'Solway-Light',
        fontSize: 15,
        textAlign: 'justify'
    }
})