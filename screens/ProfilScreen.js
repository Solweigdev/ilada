import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class ProfilScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ paddingTop: 25, paddingBottom: 25, backgroundColor: '#28734F' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body>
                        
                    </Body>
                    <Left>
                        <Button transparent>
                            <Icon name='man' onPress={() => this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                </Header>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfilScreen;