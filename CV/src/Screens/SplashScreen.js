import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'


export default class Splash extends Component {
    UNSAFE_componentWillMount = () => {
        setTimeout(() => { this.props.navigation.navigate('App') }, 3000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999'
    }
})