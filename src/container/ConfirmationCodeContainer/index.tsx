// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast, View } from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import ConfirmationCode from 'screens/ConfirmationCode'

const startAtProfile = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'HomeDrawer' })],
})

const startAtVerification = (routeName: string) => StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName })],
})

let submitted = false

export interface Props {
	navigation: any
	userStore: any
	signupForm: any
}
export interface State {
	code: string
	codeError: boolean
}

@inject('userStore')
@inject('signupForm')
@observer
export default class ConfirmationCodeContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			code: '',
			codeError: false
		}

		this.confirmCode = this.confirmCode.bind(this)
		this.setCode = this.setCode.bind(this)
		this.checkFormValidity = this.checkFormValidity.bind(this)
		this.resendCode = this.resendCode.bind(this)
	}

	async confirmCode() {
		if (!submitted) {
			submitted = true
			try {
				await this.props.userStore.confirmCode(this.state.code)
				const { first, verificationStage } = await this.props.userStore.getUser()

				if (first) {
					this.props.navigation.dispatch(startAtProfile)
				} else {
					this.props.navigation.dispatch(startAtVerification(verificationStage))
				}
			} catch (error) {
				console.log('ERROR CONFIRMING CODE:', error)
			}
		}
	}

	resendCode() {
		const { signupForm: { phone } } = this.props
		this.props.userStore.requestCode({ phone })
	}

	setCode(code: string) {
		this.setState({ code })
	}

	checkFormValidity() {
		if (this.state.code.length !== 6) {
			this.setState({ codeError: true })
		} else {
			this.setState({ codeError: false })
		}
	}

	render() {
		const Fields = (
			<Form>
				<Item error={this.state.code.length !== 6 ? true : false}>
					<Icon active name='code' />
					<Input
						placeholder='6-digit Confirmation Code'
						onChangeText={this.setCode}
						keyboardType="phone-pad"
					/>
				</Item>
			</Form>
		)
		return <ConfirmationCode codeForm={Fields} confirmCode={this.confirmCode} checkForm={this.checkFormValidity} resendCode={this.resendCode} />
	}
}
