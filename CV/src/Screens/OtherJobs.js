import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Header from '../Components/Header'

export default class OtherJobs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header {...props} />
                <FlatList
                
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})