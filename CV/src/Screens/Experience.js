import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import Header from '../Components/Header'
import Exp from '../Components/Exp'

import axios from 'axios'
import Topicos from '../Components/Topicos';

export default class Experience extends Component {
    state = {
        experencias: [],
        outrasExperencias: [
            {
                id: 1,
                cargo: 'Atividade extracurrícular',
                company: 'AVES - Aero Vitória Espírito Santo',
                desc: 'dasfa'
            },
            {
                id: 2,
                cargo: 'Atividade extracurrícular',
                company: 'Pesquisa: Fluidos não Newtonianos - Tixotrópicos',
                desc: 'dasfa'
            },
        ]
    }
    componentDidMount() {
        this.loadExp()
    }
    async loadExp() {
        await axios.get('https://lambe-e09e6.firebaseio.com/exp.json')
            .then(res => { this.setState({ experencias: res.data }) })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <ScrollView>
                    <View style={styles.topico}>
                        <Topicos topico={'Experiências na carteira'} />
                    </View>
                    <FlatList
                        data={this.state.experencias}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => <Exp key={item.id} {...item} />} />
                    <View style={styles.topico}>
                        <Topicos topico={'Outras experiências'} />
                    </View>
                    <FlatList
                        data={this.state.outrasExperencias}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => <Exp key={item.id} {...item} />} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    topico: {
        padding: 10,
    }
})