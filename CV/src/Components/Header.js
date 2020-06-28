import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

// import Icon from 'react-native-vector-icons/FontAwesome'

export default class Headere extends Component {
    render() {
        return (
            // <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name={"menu"} />
                        </Button>
                    </Left>
                    <Body style={styles.subtitle}>
                        <Title>{this.props.subtitle ? this.props.subtitle : 'Curriculum Vitae'}</Title>
                    </Body>
                    <Right />
                    {/* <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                            
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>
                        Rodrigo Pissinate De Angeli
                </Text>
                    <Text style={styles.subtitle}>
                        {this.props.subtitle ? this.props.subtitle : 'Curriculum Vitae'}
                    </Text> */}
                </Header>
            //</Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#91E5F6',
    },
    title: {
        fontSize: 25,
        //fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Solway-ExtraBold' //Solway-Light
    },
    subtitle: {
        fontFamily: 'GreatVibes-Regular',
    },
    iconBar: {
        flexDirection: 'row',
    },
})