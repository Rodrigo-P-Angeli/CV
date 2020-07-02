import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, ImageBackground, Text } from 'react-native'


export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(() => { this.props.navigation.navigate('Home') }, 2000)
    }
    render() {
        return (
            <ImageBackground source={require('../assets/images/CLA_1362.jpg')} style={styles.backGround}>
                <View style={styles.container}>
                    <Text style={styles.title}>Rodrigo Pissinate De Angeli</Text>
                    <ActivityIndicator size={'large'} style={styles.ActInd} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    backGround: {
        flex: 1,
        resizeMode: 'contain'
    },
    ActInd: {
        backgroundColor: 'white'
    }
})