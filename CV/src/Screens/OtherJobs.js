import React, { Component } from 'react'
import { View, StyleSheet, Alert, ScrollView, ImageBackground } from 'react-native'
import axios from 'axios'

import Header from '../Components/Header'
import Job from '../Components/Job'

export default class OtherJobs extends Component {
    state = {
        trabalhos: []
    }

    componentDidMount() {
        this.loadingOtherJobs()
    }

    loadingOtherJobs() {
        axios.get('https://lambe-e09e6.firebaseio.com/otherjobs.json')
            .then(res => this.setState({ trabalhos: res.data }))
            .catch(err => Alert.alert('Opss.', err))
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/back-ground.jpg')} style={styles.backround}>
                    <Header {...this.props} title={'Outros trabalhos '} />
                    <ScrollView>
                        {this.state.trabalhos.map(item => <Job {...item} key={Math.random()} />)}
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
    backround: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    scroll: {
        flex: 1,
    },
})