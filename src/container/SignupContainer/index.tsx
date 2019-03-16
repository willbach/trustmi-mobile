// @flow
import * as React from 'react'
import { Linking, TouchableHighlight } from 'react-native'
import { Item, Input, Icon, Form, Toast, View, Radio, Text } from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'
import { observer, inject } from 'mobx-react/native'
import SplashScreen from 'react-native-splash-screen'
import firebase from 'react-native-firebase'

import language from 'language'

const { formErrors } = language

import Signup from 'screens/Signup'

const startAtProfile = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'HomeDrawer' })],
})

const startAtVerification = (routeName: string) => StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName })],
})

const startAtSignup = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Signup' })],
})

export interface Props {
	navigation: any
	signupForm: any
	userStore: any
}
export interface State {
	hasStoredAccount: boolean
}

@inject('signupForm')
@inject('userStore')
@observer
export default class SignupContainer extends React.Component<Props, State> {
	emailInput: any
	phoneInput: any
	submitted: boolean

	constructor(props) {
		super(props)

		this.state = {
			hasStoredAccount: false
		}
		this.submitted = false

		this.signup = this.signup.bind(this)
		this.goToRecover = this.goToRecover.bind(this)
		this.checkFormValidity = this.checkFormValidity.bind(this)
		this.checkEmail = this.checkEmail.bind(this)
		this.checkPhone = this.checkPhone.bind(this)

		this.checkForStoredAccountOrUrl()
	}

	async checkForStoredAccountOrUrl() {
		try {
			const { invalidToken, first, verificationStage }  = await this.props.userStore.getUser()
			console.log('Just logged in, routing:', { invalidToken, first, verificationStage })


			if (first) {
				console.log(1)
				this.props.navigation.dispatch(startAtProfile)
			} else if (verificationStage) {
				console.log(2)
				this.props.navigation.dispatch(startAtVerification(verificationStage))
			} else if (invalidToken) {
				console.log(3)
				Toast.show({ type: 'warning', text: 'Your session has expired, please confirm your phone number to continue', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
				this.setState({ hasStoredAccount: true })
			} else {
				// const url = await Linking.getInitialURL()
				// if (url) {
				// 	const startIndex = url.indexOf('signupId=')
				// 	const signupId = url.slice(startIndex + 9)
	
				// 	await this.props.userStore.registerAccount({ signupId })
				// 	this.props.navigation.dispatch(startAtProfile)
				// }
			}

			SplashScreen.hide()
		} catch (error) {
			console.log('NO USER EXISTS:', error)
			SplashScreen.hide()
		}
	}

	async signup() {
		const { props: { signupForm: { email, phone, sendTo } } } = this

		if (!this.checkFormValidity()) {
			return
		}

		if (!this.submitted) {
			this.submitted = true

			try {
				this.props.userStore.setProperties({ phone })
				await this.props.userStore.requestCode({ email, phone, sendTo })
				this.props.navigation.navigate('ConfirmationCode', { email, phone })
				this.props.signupForm.clearStore()

			} catch (error) {
				console.log('ERROR REQUESTING CODE:', error)
				this.props.signupForm.clearStore()
				this.props.navigation.dispatch(startAtSignup)
				Toast.show({ type: 'danger', text: 'There was an error creating your account, please try again later', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
			}
		}
	}

	goToRecover() {
		this.props.navigation.navigate('Recover')
	}

	checkFormValidity() {
		this.props.signupForm.validateForm()
		if (!this.props.signupForm.isValid) {
			Toast.show({
				text: 'Please ensure all fields are filled out correctly',
				duration: 2000,
				position: 'top',
				textStyle: { textAlign: 'center' },
			})
		}
		return this.props.signupForm.isValid
	}

	checkEmail() {
		this.props.signupForm.validate('email')
	}

	checkPhone() {
		this.props.signupForm.validate('phone')
	}

	render() {
		const form = this.props.signupForm

		const Fields = (
			<Form style={{marginTop: 16}}>
				{/* <Item error={form.emailError ? true : false}>
					<Icon name='ios-mail' />
					<Input placeholder='Email' keyboardType='email-address' ref={(c) => {this.emailInput = c}} value={form.email} onBlur={this.checkEmail} maxLength={100}
						onChangeText={(e) => form.onChange('email', e)} returnKeyType="next" onSubmitEditing={() => { this.phoneInput.wrappedInstance.focus() }}/>
				</Item> */}
				<Item error={form.phoneError ? true : false}>
					<Icon name='ios-phone-portrait' />
					<Input placeholder='Phone Number' keyboardType="phone-pad" ref={(c) => {this.phoneInput = c}} value={form.phone} onBlur={this.checkPhone} maxLength={12}
						onChangeText={(e) => form.onChange('phone', e)}/>
				</Item>
				{/* <Text style={styles.linkMessage}>Send the confirmation link to:</Text>
				<View style={general.flexRowCenter}>
					<Text style={styles.sendTo(form.sendTo === 'phone')} onPress={() => form.onChange('sendTo', 'phone')}>Phone</Text>
					<Text style={styles.sendTo(form.sendTo === 'email')} onPress={() => form.onChange('sendTo', 'email')}>Email</Text>
				</View> */}
			</Form>
		)
		return <Signup signupForm={Fields} onSignup={this.signup} goToRecover={this.goToRecover} hasStoredAccount={this.state.hasStoredAccount} />
	}
}
