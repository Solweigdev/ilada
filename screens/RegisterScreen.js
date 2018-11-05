import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, ImageBackground, Keyboard } from 'react-native';
import DatePickerPicker from 'react-native-modal-datetime-picker';

class RegisterScreens extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    handlePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {

        return (
            <ImageBackground source={require('./../assets/bg.png')} style={Styles.backgroundImage}>
                <View style={Styles.header}>
                    <Image source={require('./../assets/logo_vert.png')} style={Styles.logo} />
                </View>
                <View style={Styles.formContent}>
                    <TextInput elevation={5} style={Styles.formlabel} placeholder="E-MAIL" placeholderTextColor="#28734F" keyboardType="email-address" />
                    <TextInput elevation={5} style={Styles.formlabel} placeholder="MOT DE PASSE" placeholderTextColor="#28734F" keyboardType="twitter" secureTextEntry={true}/>
                    <TextInput elevation={5} style={Styles.formlabel} placeholder="DATE DE NAISSANCE" placeholderTextColor="#28734F" onFocus={this.showPicker} keyboardType={'none'}/>
                    <DatePickerPicker 
                        elevation={5}
                        style={Styles.formlabel}
                        placeholder="DATE DE NAISSANCE"
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        placeholderTextColor="#28734F" />
                    <TextInput elevation={5} style={Styles.formlabel} placeholder="PRÉNOM" placeholderTextColor="#28734F" />
                    <TextInput elevation={5} style={Styles.formlabel} placeholder="NOM" placeholderTextColor="#28734F" />
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
        width:100,
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
    }

  
})