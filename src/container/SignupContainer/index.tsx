// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'
import { observer, inject } from 'mobx-react/native'
import { getPhoto } from 'utils/camera'

import language from 'language'

const { formErrors } = language

import { NAME_MAX_LENGTH, DATE_LENGTH } from 'theme/constants'

import Signup from 'screens/Signup'

const startAtMnemonic = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Mnemonic' })],
})

const startAtSignup = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Signup' })],
})

export interface Props {
	navigation: any
	signupForm: any
	userStore: any
	groupStore: any
	documentStore: any
}
export interface State {}

@inject('signupForm')
@inject('userStore')
@inject('groupStore')
@inject('documentStore')
@observer
export default class SignupContainer extends React.Component<Props, State> {
	emailInput: any
	firstInput: any
	middleInput: any
	lastInput: any
	sexInput: any
	dateOfBirthInput: any
	pwdinput: any
	submitted: boolean

	constructor(props) {
		super(props)

		this.submitted = false

		this.signup = this.signup.bind(this)
		this.goToRecover = this.goToRecover.bind(this)
		this.checkFormValidity = this.checkFormValidity.bind(this)
		this.takePhotoId = this.takePhotoId.bind(this)
		this.takeSelfie = this.takeSelfie.bind(this)
	}

	async takePhotoId() {
		try {
			const image = await getPhoto(true)
	
			const { mime, data } = image
			this.props.signupForm.onChange('photoId', { data, mime })
		} catch (error) {
			console.log('ERROR TAKING PHOTO OF ID:', error)
		}
	}

	async takeSelfie() {
		try {
			const image = await getPhoto(true, 'front')
	
			const { mime, data } = image
			this.props.signupForm.onChange('selfie', { data, mime })
		} catch (error) {
			console.log('ERROR TAKING SELFIE:', error)
		}
	}

	async signup(pin: string) {
		const { props: { signupForm: { email, first, middle, last, sex, dateOfBirth, photoId, selfie } } } = this
		if (!this.submitted) {
			this.submitted = true

			try {
				const { address, privateKeyHex } = await this.props.userStore.createUser(this.props.signupForm.email, pin)
				await this.props.groupStore.connectToServer(address, privateKeyHex)
				console.log(1)
				await this.props.documentStore.addDocument({ address, privateKeyHex })({ type: 'photoId', first, middle, last, sex, dateOfBirth, file: photoId.data, selfie: selfie.data })
				console.log(2)

				const userCreated = await this.props.groupStore.createUser({ email, first, middle, last, sex, dateOfBirth })

				if (userCreated) {
					this.props.signupForm.clearStore()
					this.props.navigation.dispatch(startAtMnemonic)
				}
			} catch (error) {
				console.log('ERROR CREATING ACCOUNT', error)
				this.props.userStore.removeUser(pin)
				this.props.signupForm.clearStore()
				this.props.navigation.dispatch(startAtSignup) //need to clear the navigation stack
				Toast.show({ type: 'danger', text: 'There was an error creating your account, please try again later', duration: 2000, position: 'bottom', textStyle: { textAlign: 'center' } })
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

	render() {
		const form = this.props.signupForm

		const Fields = (
			<Form>
				<Item error={form.emailError ? true : false}>
					<Icon name='ios-mail' />
					<Input placeholder='Email' keyboardType='email-address' ref={(c) => {this.emailInput = c}} value={form.email} onBlur={() => form.validate('email')} maxLength={NAME_MAX_LENGTH}
						onChangeText={(e) => form.onChange('email', e)} returnKeyType="next" onSubmitEditing={() => { this.firstInput.wrappedInstance.focus() }}/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon name='ios-person' />
					<Input placeholder='First Name' ref={(c) => {this.firstInput = c}} value={form.first} onBlur={() => form.validate('first')} maxLength={NAME_MAX_LENGTH}
						onChangeText={(e) => form.onChange('first', e)} returnKeyType="next" onSubmitEditing={() => { this.middleInput.wrappedInstance.focus() }}/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon name='ios-person' />
					<Input placeholder='Middle Initial (optional)' ref={(c) => {this.middleInput = c}} value={form.middle} onBlur={() => form.validate('middle')} maxLength={1}
						onChangeText={(e) => form.onChange('middle', e)} returnKeyType="next" onSubmitEditing={() => { this.lastInput.wrappedInstance.focus() }}/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon name='ios-person' />
					<Input placeholder='Last Name' ref={(c) => {this.lastInput = c}} value={form.last} onBlur={() => form.validate('last')} maxLength={NAME_MAX_LENGTH}
						onChangeText={(e) => form.onChange('last', e)} returnKeyType="next" onSubmitEditing={() => { this.sexInput.wrappedInstance.focus() }}/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon name='md-transgender' />
					<Input placeholder='Sex' ref={(c) => {this.sexInput = c}} value={form.sex} onBlur={() => form.validate('sex')} maxLength={1}
						onChangeText={(e) => form.onChange('sex', e)} returnKeyType="next" onSubmitEditing={() => { this.dateOfBirthInput.wrappedInstance.focus() }}/>
				</Item>
				<Item error={form.emailError ? true : false}>
					<Icon name='ios-calendar' />
					<Input placeholder='Date of Birth MM/DD/YYYY' ref={(c) => {this.dateOfBirthInput = c}} value={form.dateOfBirth} onBlur={() => form.validate('dateOfBirth')} maxLength={DATE_LENGTH}
						onChangeText={(e) => form.onChange('dateOfBirth', e)} />
				</Item>
			</Form>
		)
		return <Signup signupForm={Fields} onSignup={this.signup} goToRecover={this.goToRecover} checkForm={this.checkFormValidity} takePhotoId={this.takePhotoId} takeSelfie={this.takeSelfie} photoIdTaken={form.photoId.data.length > 0} selfieTaken={form.selfie.data.length > 0} />
	}
}
