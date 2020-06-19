import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'


export default class Escolaridade extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image source={this.props.image} />
                    <Text style={styles.periodo}>{this.props.periodo}</Text>
                    <Text style={styles.curso}>{this.props.curso}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //alignItems: 'center',
        padding: 10,
    },
    image: {
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    periodo: {
        fontWeight: 'bold',
        fontSize: 20,
    }

})