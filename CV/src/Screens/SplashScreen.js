import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native'


export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(() => { this.props.navigation.navigate('Home') }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/CLA_1362.jpg')} style={{flex: 1}}>
                    <ActivityIndicator size={'large'} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center'
    }
})