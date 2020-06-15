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
        fontWeight: 'bold',
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10,
    },
})

export default Topicos