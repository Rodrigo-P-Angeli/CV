import React from 'react'
import { View, Text } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerView,
} from '@react-navigation/drawer'

export default function (props) {
    return (
        <View style={{flex:1}}>
            <Text>sfads</Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}