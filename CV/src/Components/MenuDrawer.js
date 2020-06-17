import React from 'react'
import { View, Text } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerView,
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function (props) {
    return (
        <View style={{flex:1}}>
            <Icon></Icon>
            <Text>CV Rodrigo Pissinate</Text>
            <Text></Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}