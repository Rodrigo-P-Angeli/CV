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
                    {this.props.title ? this.props.title : 'Curriculum Vitae '}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#91E5F6',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // title: {
    //     fontSize: 25,
    //     //fontWeight: 'bold',
    //     color: 'black',
    //     textAlign: 'center',
    //     fontFamily: 'Solway-ExtraBold' //Solway-Light
    // },
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