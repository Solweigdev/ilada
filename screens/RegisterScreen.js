import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text} from 'react-native';

class RegisterScreens extends Component {
    constructor() {
        super()
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
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="MOT DE PASSE"
                        placeholderTextColor="#28734F"
                        keyboardType="twitter"
                        secureTextEntry={true}
                        ref={(input) => this.passwordInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.firstnameInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="PRÉNOM"
                        placeholderTextColor="#28734F"
                        ref={(input) => this.firstnameInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.surnameInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="NOM"
                        placeholderTextColor="#28734F"
                        ref={(input) => this.surnameInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.allergenInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="ALLÈGERNES"
                        placeholderTextColor="#28734F"
                        ref={(input) => this.allergenInput = input}
                        returnKeyType="next"
                        onSubmitEditing={() => this.typeInput.focus()} />
                    <TextInput
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="TYPE D'ALIMENTATION"
                        placeholderTextColor="#28734F"
                        ref={(input) => this.typeInput = input}
                        returnKeyType="go" />

                    <TouchableOpacity style={Styles.buttonContent}>
                        <Text
                            elevation={5}
                            title="VALIDER L'INSCRIPTION"
                            style={Styles.buttonText}> VALIDER L'INSCRIPTION
                            </Text>
                    </TouchableOpacity>

                    <Text style={Styles.textContent}>Déja inscrit ? Connectez-vous</Text>
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