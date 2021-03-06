import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Topicos = props => {
    return (
        <View>
            <Text style={styles.topicos}>
                {props.topico}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    topicos: {
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontFamily: 'Roboto-Regular',
    },
})

export default Topicos