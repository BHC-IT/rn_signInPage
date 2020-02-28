import React, { Component } from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet,
	BackHandler,
	Text,
	Dimensions
} from 'react-native'
import PropTypes from 'prop-types';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class SignIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: null,
		}
	}

	goTo = (i) => {
		this.setState({ page: i });
	}

	leave = (i) => {
		this.setState({ page: null });
	}

	returnButton = () => {
		return (
			<TouchableOpacity style={{ position: 'absolute' }} onPress={() => {
				if (this.state.page === null) {
					this.props.handleReturnOnMain();
				}
				this.setState({ page: null })
			}}>
				<this.props.btnRetour />
			</TouchableOpacity>
		);
	}

	renderForm = () => {
		if (this.state.page !== null) {
			let CurrentPage = this.props.mainPage[this.state.page].leadTo;
			return (
				<CurrentPage ReturnButton={() => <this.returnButton />} />
			);
		}
		return (
			<View style={{ width: deviceWidth, height: deviceHeight, alignItems: 'center' }}>
				{/* <this.returnButton /> */}
				<View style={styles.container}>
					<View>
						{this.props.mainPage.map((e, i) => {
							if (!e.button) {
								throw new Error("ta oublier le Boutton pauvre con");
							}
							let props = e.props ? e.props : {}
							return (
								<TouchableOpacity style={e.style} onPress={() => e.leadTo ? this.goTo(i) : null} key={i} {...props} >
									<e.button />
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<this.props.footer />
				</View>
			</View>
		);
	}

	render() {
		let As = this.props.As;
		let AsProps = this.props.AsProps;
		return (
			<As {...AsProps} >
				<this.renderForm />
			</As>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderRadius: 25,
		position: 'absolute',
		top: deviceHeight / 2.50,
		width: 260,
		height: 260,
		justifyContent: 'center',
		alignItems: 'center',
		transform: [{
			rotateZ: '45deg'
		}]
	}
});

SignIn.defaultProps = {
	btnRetour: () => <Text style={{ color: 'rgba(41, 128, 185, .5)', fontSize: 50 }} >{'<'}</Text>,
	handleReturnOnMain: () => BackHandler.exitApp(),
	As: View,
	AsProps: { style: { flex: 1, backgroundColor: 'black' } },
	footer: () => null,
};

SignIn.propTypes = {
	btnRetour: PropTypes.func,
	mainPage: PropTypes.array.isRequired,
	handleReturnOnMain: PropTypes.func,
	As: PropTypes.object,
	AsProps: PropTypes.object,
	footer: PropTypes.func,
};