import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '../Components/Header'
import Exp from '../Components/Exp'

import axios from 'axios'

export default class Experience extends Component {
    state = {
        experencias: [
            // {
            //     id: 1,
            //     period: '14/mar - 15/abr',
            //     desc: 'sdfasdf',
            //     company: 'Imetame',
            //     cargo: 'Assistente Técnico',
            // },
            // {
            //     id: 2,
            //     period: '14/mar - 15/abr',
            //     desc: 'sdfasdf',
            //     company: 'Imetame',
            //     cargo: 'Assistente Técnico',
            // },
            // {
            //     id: 3,
            //     period: '14/mar - 15/abr',
            //     desc: 'sdfasdf',
            //     company: 'Imetame',
            //     cargo: 'Assistente Técnico',
            // },
        ]
    }
    componentDidMount() {
        this.loadExp()
    }
    async loadExp() {
        await axios.get('https://lambe-e09e6.firebaseio.com/exp.json')
            .then(res =>{ this.setState({ experencias: res.data }) })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <FlatList
                    data={this.state.experencias}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => <Exp key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        padding: 10
    },
    content: {
        paddingLeft: 10,
        paddingTop: 10,
    }
})