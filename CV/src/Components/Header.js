import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container} elevation={5}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Icon name={"bars"} size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    {this.props.title ? this.props.title : 'Curriculum Vitae '}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 10,
        fontFamily: 'GreatVibes-Regular',
        paddingLeft: 40,
    },
    iconBar: {
        flexDirection: 'row',
    },
})