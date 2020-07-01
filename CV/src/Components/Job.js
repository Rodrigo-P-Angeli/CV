import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import ShadowView from '../Components/ShadowView'

export default class Job extends Component {
    render() {
        return (
            <ShadowView style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <View style={styles.icons}>
                    {this.props.linkGit ? <TouchableOpacity onPress={() => Linking.openURL(this.props.linkGit)}>
                        <FontAwesome name={'github'} size={30} />
                    </TouchableOpacity> : <FontAwesome name={'github'} size={30} color={'#999'} />}
                    {this.props.linkAndroid ? <TouchableOpacity onPress={() => Linking.openURL(this.props.linkAndroid)}>
                        <FontAwesome name={'android'} size={30} />
                    </TouchableOpacity> : <FontAwesome name={'android'} size={30} color={'#999'} />}
                    {this.props.linkIos ? <TouchableOpacity onPress={() => Linking.openURL(this.props.linkIos)}>
                        <FontAwesome name={'apple'} size={30} />
                    </TouchableOpacity> : <FontAwesome name={'apple'} size={30} color={'#999'} />}
                </View>
            </ShadowView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        // borderRadius: 40,
        // borderWidth: .5,
        // borderColor: 'black',
        // backgroundColor: 'white',
    },
    name: {
        fontFamily: 'Solway-Bold',
        fontSize: 20,
        flex: 3,
        alignSelf: 'center'
    },
    link: {
        fontFamily: 'Solway-Light',
        fontSize: 15,
        textAlign: 'justify'
    },
    icons: {
        flexDirection: 'row',
        flex: 1.3,
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
})