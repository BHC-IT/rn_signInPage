import React, { Component } from 'react'
import { View, TouchableOpacity, BackHandler, Text } from 'react-native'
import PropTypes from 'prop-types';

export default class SignIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page:null,
		}
	}

	goTo = (i) => {
		this.setState({page:i});
	}

	leave = (i) => {
		this.setState({page:null});
	}

	returnButton = () => {
		return (
			<TouchableOpacity style={{marginTop:50, marginLeft:20}} onPress={() => {
				if(this.state.page === null){
					this.props.handleReturnOnMain();
				}
				this.setState({page:null})
			}}>
				<this.props.btnRetour/>
			</TouchableOpacity>
		);
	}

	renderForm = () => {
		if (this.state.page !== null){
			let CurrentPage = this.props.mainPage[this.state.page].leadTo;
			return (
				<CurrentPage ReturnButton={() => <this.returnButton/>} />
			);
		}
		return (
			<View style={{flex:1, justifyContent:'space-between'}} >
				<this.returnButton/>
				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
					<View style={{justifyContent:'center', alignItems:'center'}} >
						{this.props.mainPage.map((e, i) => {
							if (!e.button){
								throw new Error("ta oublier le Boutton pauvre con");
							}
							let props = e.props ? e.props : {}
							return (
								<TouchableOpacity style={[{marginTop:10}, e.style]} onPress={() => e.leadTo ? this.goTo(i) : null} key={i} {...props} >
									<e.button/>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
				<View style={{ alignItems:'center', marginBottom:10}} >
					<this.props.footer/>
				</View>
			</View>
		);
	}
	render() {
		let As = this.props.As;
		let AsProps = this.props.AsProps;
		return (
			<As {...AsProps} >
				<this.renderForm/>
			</As>
		);
	}
}

SignIn.defaultProps = {
	btnRetour:()=><Text style={{color:'white'}} >{'<'}</Text>,
	handleReturnOnMain:()=>BackHandler.exitApp(),
	As:View,
	AsProps:{style:{flex:1, backgroundColor:'black'}},
	footer:() => null,
};

SignIn.propTypes = {
	btnRetour: PropTypes.func,
	mainPage: PropTypes.array.isRequired,
	handleReturnOnMain: PropTypes.func,
	As: PropTypes.object,
	AsProps: PropTypes.object,
	footer: PropTypes.func,
};
