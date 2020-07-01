import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'


export default class ShadowView extends Component {
    render() {
        return (
            <View style={[{ padding: 10 }, this.props.style]}>
                <View elevation={5} style={styles.cont}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cont: {
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
    },
})