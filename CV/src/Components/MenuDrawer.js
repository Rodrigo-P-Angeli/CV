import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/FontAwesome'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'

export default function (props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>CV Rodrigo Pissinate</Text>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../assets/images/foto_perfil.jpg')} />
                    <View style={{flex:1}}>
                        <View style={styles.itens}>
                            <Email name={'email'} size={15} />
                            <Text style={styles.contato}>rodrigop.deangeli@gmail.com</Text>
                        </View>
                        <View style={styles.itens}>
                            <Icon name={'phone'} size={15} />
                            <Text style={styles.contato}>+353 87 351 8144</Text>
                        </View>
                        <View style={styles.itens}>
                            <Icon name={'phone'} size={15} />
                            <Text style={styles.contato}>+55 27 99992 8105</Text>
                        </View>
                    </View>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        padding: 10,
        fontFamily: 'Solway-Bold'
    },
    contato: {
        fontSize: 13,
        paddingLeft: 5,
        fontFamily: 'Solway-Light'
    },
    container: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    content: {
        flexDirection: 'row',
        padding: 5,
    },
    itens: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    drawerItems: {
        fontFamily: 'shelter'
    }
})