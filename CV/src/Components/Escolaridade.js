import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'


export default class Escolaridade extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={this.props.image} style={styles.image} />
                        <View style={{ justifyContent: 'space-around', flex: 1 }}>
                            <Text style={styles.periodo}>{this.props.periodo.toUpperCase()}</Text>
                            <Text style={styles.curso}>{this.props.curso}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 30,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    periodo: {
        fontSize: 20,
        paddingLeft: 10,
        fontFamily: 'Solway-Medium'
    },
    curso: {
        fontSize: 20,
        paddingLeft: 10,
        fontFamily: 'Solway-Light',
    }
})