// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import Signup from 'stories/screens/Signup'

export interface Props {
	navigation: any
	signupForm: any
	userStore: any
}
export interface State {}

@inject('signupForm')
@inject('userStore')
@observer
export default class SignupContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.signup = this.signup.bind(this)
		this.checkFormValidity = this.checkFormValidity.bind(this)
	}

	emailInput: any
	pwdinput: any
	async signup(pin: string) {
		const userCreated = await this.props.userStore.createUser(this.props.signupForm.email, pin)
		this.props.signupForm.clearStore()
		if (userCreated) {
			this.props.navigation.navigate('Drawer')
		}
	}

	checkFormValidity() {
		this.props.signupForm.validateForm()
		if (!this.props.signupForm.isValid) {
			Toast.show({
				text: 'Please enter a valid email',
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
					<Icon active name='person' />
					<Input
						placeholder='Email'
						keyboardType='email-address'
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
			</Form>
		)
		return <Signup signupForm={Fields} onSignup={(pin: string) => this.signup(pin)} checkForm={this.checkFormValidity} />
	}
}
