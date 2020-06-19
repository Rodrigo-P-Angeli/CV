import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList } from 'react-native';
import Header from '../Components/Header'
import Topicos from '../Components/Topicos';
import Axios from 'axios';
import Cursos from '../Components/Cursos'

export default class Conhecimentos extends Component {
    state = {
        cursos: [
            {
                logo: require('../assets/images/react-icon.png'),
                id: 1,
                name: 'Curso'
            },
            {
                logo: require('../assets/images/react-icon.png'),
                id: 2,
                name: 'Curso'
            },
            {
                logo: require('../assets/images/react-icon.png'),
                id: 3,
                name: 'Curso'
            },
        ]
    }
    // componentDidMount(){
    //     Axios.get('')
    // }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} />
                    <ScrollView style={{ padding: 10 }}>
                        <Topicos topico={'Línguas'} />
                        <Text style={styles.linguas}>Português (Nativo)</Text>
                        <Text style={styles.linguas}>Inglês (Avançado)</Text>
                        <Text style={styles.linguas}>Francês (Avançado)</Text>
                        <Topicos topico={'Cursos'} />
                        <FlatList
                            data={this.state.cursos}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => <Cursos image={item.logo} curso={item.name} />}
                            numColumns={2} />
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
        paddingLeft: 10,
        paddingTop: 10,
    },
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    linguas: {
        padding: 7.5,
        fontFamily: 'Solway-Light'
    },
})