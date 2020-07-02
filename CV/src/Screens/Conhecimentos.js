import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList, YellowBox } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos'
import Axios from 'axios'
import Cursos from '../Components/Cursos'

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])


export default class Conhecimentos extends Component {
    state = {
        cursos: []
    }

    componentDidMount() {
        this.loadCursos()
    }

    async loadCursos() {
        await Axios.get('https://lambe-e09e6.firebaseio.com/cursos.json')
            .then(res => this.setState({ cursos: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <ScrollView>
                        <View style={{ padding: 10 }}>
                            <View elevation={5} style={styles.shadow}>
                                <Topicos topico={'Línguas'} />
                                <Text style={styles.linguas}>Português (Nativo)</Text>
                                <Text style={styles.linguas}>Inglês (Avançado)</Text>
                                <Text style={styles.linguas}>Francês (Avançado)</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View elevation={5} style={styles.shadow}>
                                <Topicos topico={'Cursos'} />
                                <FlatList
                                    data={this.state.cursos}
                                    keyExtractor={() => `${Math.random()}`}
                                    renderItem={({ item }) => <Cursos image={item.logo} curso={item.name} />}
                                    numColumns={2} />
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
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
        paddingTop: 10,
    },
    backround: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
    },
    linguas: {
        fontFamily: 'Solway-Light',
        paddingTop: 7.5
    },
    shadow: {
        padding: 10,
        backgroundColor: 'white',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
    }
})