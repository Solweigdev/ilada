import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Text} from 'react-native';


class RegisterScreens extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstname: '',
            name: ''
        }
    }

    updateValue(text, field) {
        if(field == 'email'){
            this.setState({ email: text })
        } else if(field == 'password'){
            this.setState({ password: text })
        } else if(field == 'firstname'){
            this.setState({ firstname: text })
        } else if(field == 'name'){
            this.setState({ name: text })
        }
    }

    submit() {
        let collection = {};
        collection.email = this.state.email,
        collection.password = this.state.password,
        collection.firstname = this.state.firstname,
        collection.name = this.state.name
        console.warn(collection);

        const url = "http://51.158.73.240:3000/users/signup";

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('response', response)
            this.props.navigation.navigate('ListProduct', {response})
        });
    }

    render() {
        return (
            <ImageBackground source={require('./../assets/bg.png')} style={Styles.backgroundImage}>
                <View style={Styles.header}>
                    <Image source={require('./../assets/logo_vert.png')} style={Styles.logo} />
                </View>
                
                <View style={Styles.formContent}>
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="E-MAIL"
                        placeholderTextColor="#28734F"
                        keyboardType="email-address"
                        onChangeText = { (text) => this.updateValue(text, 'email')}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="MOT DE PASSE"
                        placeholderTextColor="#28734F"
                        keyboardType="twitter"
                        secureTextEntry={true}
                        onChangeText = { (text) => this.updateValue(text, 'password')}
                        ref={(input) => this.passwordInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.firstnameInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="PRÉNOM"
                        placeholderTextColor="#28734F"
                        onChangeText = { (text) => this.updateValue(text, 'firstname')}
                        ref={(input) => this.firstnameInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.nameInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="NOM"
                        placeholderTextColor="#28734F"
                        onChangeText = { (text) => this.updateValue(text, 'name')}
                        ref={(input) => this.nameInput = input}
                        returnKeyType="go" />

                    <TouchableOpacity style={Styles.buttonContent}>
                        <Text
                            elevation={5}
                            title="VALIDER L'INSCRIPTION"
                            onPress = {() => this.submit()}
                            style={Styles.buttonText}> VALIDER L'INSCRIPTION
                            </Text>
                    </TouchableOpacity>

                    <Text style={Styles.textContent}>
                        <Text>Déja inscrit ? </Text>
                        <Text 
                            style={{textDecorationLine: 'underline'}}
                            onPress = {() => this.props.navigation.navigate('Login')}> Connectez-vous</Text>
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}

export default RegisterScreens;

const Styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },

    logo: {
        width: 100,
        height: 100
    },

    header: {
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formContent: {
        alignItems: 'center',
        marginTop: 35
    },

    formlabel: {
        marginTop: 15,
        backgroundColor: '#ffffff',
        width: 250,
        height: 45,
        borderRadius: 5,
        textAlign: 'center',
        color: '#28734F',
        fontWeight: 'bold',
    },

    error: {
        borderWidth: 2,
        borderColor: 'red'
    },

    buttonContent: {
        marginTop: 15,
        backgroundColor: '#28734F',
        borderWidth: 1,
        borderColor: '#ffffff',
        paddingVertical: 15,
        width: 250,
    },

    buttonText: {
        textAlign: 'center',
        color: '#ffffff'
    },

    textContent: {
        color: '#ffffff',
        marginTop: 15,
    }
})