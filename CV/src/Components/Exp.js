import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Exp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.date}>{this.props.period.toUpperCase()}: </Text>
                    <Text style={styles.company}>{this.props.company}</Text>
                </View>
                <Text style={styles.desc}>{this.props.cargo}: {this.props.desc}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    date: {
        // fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Solway-Medium',
        textAlign: 'justify',
    },
    company: {
        fontSize: 15,
        fontFamily: 'Solway-Light',
        flex: 1,
    },
    desc: {
        paddingTop: 5,
        fontFamily: 'Solway-Light',
        flex: 1,
    }
})