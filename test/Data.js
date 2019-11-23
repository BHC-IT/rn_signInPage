import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native';
import { View, StyleSheet, Platform, Image, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, TouchableWithoutFeedback, Dimensions, ScrollView, BackHandler } from 'react-native'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Container, Header, Content, Toast, Button, Form, Item, Input, Label, Text, CheckBox, ListItem, Body } from 'native-base';
import * as WebBrowser from 'expo-web-browser';

import { Ionicons } from '@expo/vector-icons';

import DismissKeyboard from 'react-native-dismiss-keyboard';

import * as Localization from 'expo-localization';
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import KeyboardSpacer from 'react-native-keyboard-spacer';

import { Fumi, Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppIntroSlider from 'react-native-app-intro-slider';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const SizeBar = 0;
const redArya = 'red';
const blueArya = 'blue';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

const borderBotSize = 4;
const textInSize = 42;

import SignIn from '../src/SignIn'

function footer(){
	return (
		<TouchableOpacity activeOpacity={1} onPress={() => WebBrowser.openBrowserAsync("https://aryatrading.com")} >
			<Button style={{backgroundColor:"lightgrey", alignItems:'center', justifyContent:'center', width: deviceWidth/1.44, height: deviceHeight/16}} rounded onPress={() => WebBrowser.openBrowserAsync("https://aryatrading.com")}>
				<Text style={{ }} >Souscrire à l'application</Text>
			</Button>
		</TouchableOpacity>
	);
}

function _renderSignIn(ReturnButton){
		return (
			<View style={{flex:1, justifyContent:'space-between'}}>
				<View style={{}} >
					<ReturnButton/>
				</View>
				<View style={{}} >
					<View style={{flexDirection:'row', justifyContent:'center', marginTop:20}} >
						<View style={{width:deviceWidth/1.1}} >
							<Fumi
								style={{borderBottomWidth:borderBotSize, borderBottomColor:'darkgrey', borderTopLeftRadius:10, borderTopRightRadius:10}}
								label={'Email'}
								iconClass={FontAwesomeIcon}
								iconName={'user-circle'}
								iconColor={redArya}
								iconSize={20}
								iconWidth={40}
								inputPadding={16}
								onChangeText={()=>{}}
								autoCapitalize = "none"
							/>
							<Fumi
								style={{borderBottomLeftRadius:10, borderBottomRightRadius:10}}
								label={'Mot de passe'}
								iconClass={FontAwesomeIcon}
								iconName={'lock'}
								iconColor={redArya}
								iconSize={20}
								iconWidth={40}
								inputPadding={16}
								onChangeText={()=>{}}
								autoCapitalize = "none" secureTextEntry={true}
							/>
							<View style={{marginTop:20}} >
								<TouchableOpacity activeOpacity={1} onPress={()=>{}} >
								<Button style={{backgroundColor:redArya, width:deviceWidth/1.1, justifyContent:"center"}} rounded onPress={()=>{}}>
									<Text style={{ }} >Se connecter</Text>
								</Button>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={{marginTop:15}} onPress={this.activatePopUpForgot} onLongPress={() => {}} >
								<Text style={{color:"darkgrey", textAlign: 'center', }} >Mot de passe oublié ?</Text>
							</TouchableOpacity>
						</View>
					</View>
					{Platform.OS === 'android' ? <KeyboardSpacer topSpacing={-100} /> : null }
				</View>
				<View style={{marginBottom:10}} >
					<TouchableOpacity style={{}} onPress={()=>{}} >
							<Text style={{color:"darkgrey", textAlign: 'center', }} >Première connexion ? Activer mon compte</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

var button = [
	{
		button:() => <Text style={{color:"white"}}>Me co</Text>,
		leadTo:({ReturnButton }) => _renderSignIn(ReturnButton),
		style:{backgroundColor:'red', alignItems:'center', width:deviceWidth/1.44}
	},
	{
		button:() => <Text style={{color:"white"}}>lol</Text>,
		leadTo:({ReturnButton }) => {
			return (
				<View>
					<ReturnButton/>
					<Text style={{color:'white'}} >lolilol2</Text>
				</View>
			);
		},
		style:{backgroundColor:'red', alignItems:'center', width:deviceWidth/1.44}
	},
	{
		button:() => <Text style={{color:"white", textAlign: 'center', justifyContent: 'flex-end', color: '#ffffff',  marginTop:20}}>Hint : Pensez à activer votre compte si vous vous connectez pour la première fois</Text>,
		style:{alignItems:'center'},
		props:{activeOpacity:1}
	},
]

function btnRetour(){
	return <Text style={{color:'white'}} >retour</Text>
}

export default class Page extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<SignIn
				btnRetour={btnRetour}
				mainPage={button}
			/>
		);
	}
}
