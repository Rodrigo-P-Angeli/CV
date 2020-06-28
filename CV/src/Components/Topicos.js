import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, H3 } from 'native-base'

const Topicos = props => {
    return (
        <View>
            <H3 style={styles.topicos}>
                {props.topico}
            </H3>
        </View>
    )
}
const styles = StyleSheet.create({
    topicos: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10,
        fontFamily: ''
    },
})

export default Topicos