import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Icon name={"bars"} size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    Rodrigo Pissinate De Angeli
                </Text>
                <Text style={styles.subtitle}>
                    {this.props.subtitle ? this.props.subtitle : 'Curriculum Vitae'}
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
        fontSize: 25,
        //fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Solway-ExtraBold' //Solway-Light
    },
    subtitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 10,
        fontFamily: 'GreatVibes-Regular'
    },
    iconBar: {
        flexDirection: 'row',
    },
})