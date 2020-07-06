import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container} elevation={10}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name={"bars"} size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>
                        {this.props.title ? this.props.title : 'Curriculum Vitae '}
                    </Text>
                    {this.props.subtitle ?
                        <Text style={styles.subtitle}>
                            {this.props.subtitle}
                        </Text> : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    title: {
        color: 'black',
        fontSize: 35,
        fontFamily: 'GreatVibes-Regular',
        paddingLeft: 35,
    },
    iconBar: {
        paddingTop: 3,
    },
    subtitle: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Roboto-Light',
        paddingLeft: 35,
    }
})