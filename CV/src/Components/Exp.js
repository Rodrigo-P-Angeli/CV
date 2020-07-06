import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Exp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.date}>{this.props.period.toUpperCase()}</Text>
                    <Text style={styles.company}>{this.props.company}</Text>
                </View>
                <Text style={styles.desc}>{this.props.cargo}: {this.props.desc}</Text>
                {this.props.topicos ? this.props.topicos.map((item) =>
                    <View key={Math.random()} style={{ flexDirection: 'row' }}>
                        <Text style={{paddingTop: 5}}> • </Text>
                        <Text style={styles.topicos}>{item}</Text>
                    </View>
                ) : null}
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
        fontFamily: 'Roboto-Bold',
        alignSelf: 'center'
    },
    company: {
        paddingTop: 5,
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        flex: 1,
    },
    desc: {
        paddingTop: 5,
        fontFamily: 'Roboto-Light',
        flex: 1,
        textAlign: 'justify',
    },
    topicos: {
        paddingTop: 5,
        fontFamily: 'Solway-Light',
        flex: 1,
        textAlign: 'justify',
    }
})