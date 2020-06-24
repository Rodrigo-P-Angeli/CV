import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert, ImageBackground, YellowBox } from 'react-native';
import Header from '../Components/Header'
import Exp from '../Components/Exp'

import axios from 'axios'
import Topicos from '../Components/Topicos'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class Experience extends Component {
    state = {
        experencias: [],
        outrasExperencias: [
            {
                id: 1,
                cargo: 'Atividade extracurrícular',
                company: 'AVES - Aero Vitória Espírito Santo',
                desc: 'dasfadmfmdkm\n adfkaskdmfkmasdkfmadskmfakdsmfkamdskfmadaaaaaaaaaaarodrigo',
                period: 'mar/2020 - jun/2020'
            },
            {
                id: 2,
                cargo: 'Atividade extracurrícular',
                company: 'Pesquisa: Fluidos não Newtonianos - Tixotrópicos',
                desc: 'dasfaasdadmfma fad f as fd a dfas dfas df ads f adfad fa sf amf m fas d daf m ',
                period: 'mar/2020 - jun/2020'
            },
        ]
    }
    componentDidMount() {
        this.loadExp()
    }
    async loadExp() {
        await axios.get('https://lambe-e09e6.firebaseio.com/exp.json')
            .then(res => { this.setState({ experencias: res.data }) })
            .catch(() => Alert.alert('Ops','Could not load, please verify your connection to internet'))
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <ScrollView>
                        <View style={styles.topico}>
                            <Topicos topico={'Experiências na carteira'} />
                        </View>
                        <FlatList
                            data={this.state.experencias}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={({ item }) => <Exp {...item} />} />
                        <View style={styles.topico}>
                            <Topicos topico={'Outras experiências'} />
                        </View>
                        <FlatList
                            data={this.state.outrasExperencias}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={({ item }) => <Exp {...item} />} />
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topico: {
        padding: 5,
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})