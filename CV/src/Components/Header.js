import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name={"bars"} size={30} color="#900"/>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Rodrigo Pissinate De Angeli
                </Text>
                <Text style={styles.subtitle}>
                    Curriculum Vitae
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#91E5F6',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    subtitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 10,
    }
})