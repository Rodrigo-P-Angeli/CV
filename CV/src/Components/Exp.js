import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Exp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.date}>{this.props.period} </Text>
                    <Text style={styles.company}>{this.props.company} ({this.props.cargo})</Text>
                </View>
                <Text style={styles.desc}>{this.props.desc}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    date: {
        // fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Solway-Medium'
    },
    company: {
        fontFamily: 'Solway-Light',
    },
    desc: {
        fontFamily: 'Solway-Light',
    }
})