// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast, View } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import Recover from 'screens/Recover'

let submitted = false

export interface Props {
	navigation: any
	restoreForm: any
	userStore: any
}
export interface State {}

@inject('restoreForm')
@inject('userStore')
@observer
export default class RecoverContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.restore = this.restore.bind(this)
		this.goToSignup = this.goToSignup.bind(this)
		this.checkFormValidity = this.checkFormValidity.bind(this)
	}

	mnemonicInput: any
	emailInput: any
	
	async restore(pin: string) {
		if (!submitted) {
			submitted = true
			const userRecoverd = await this.props.userStore.restoreUser(this.props.restoreForm.email, pin, this.props.restoreForm.mnemonic)
			this.props.restoreForm.clearStore()
			if (userRecoverd) {
				this.props.navigation.navigate('HomeDrawer')
			}
		}
	}

	goToSignup() {
		this.props.navigation.navigate('Signup')
	}

	checkFormValidity() {
		this.props.restoreForm.validateForm()
		if (!this.props.restoreForm.isValid) {
			Toast.show({
				text: 'Mnemonic should be 12 words',
				duration: 2000,
				position: 'top',
				textStyle: { textAlign: 'center' },
			})
		}
		return this.props.restoreForm.isValid
	}

	render() {
		const form = this.props.restoreForm
		const Fields = (
			<View>
				<Form>
					<Item error={form.mnemonicError ? true : false}>
						<Icon active name='ios-document' />
						<Input
							placeholder='Mnemonic (12-word phrase shown when the account was created)'
							keyboardType='default'
							multiline={true}
							ref={c => (this.mnemonicInput = c)}
							value={form.mnemonic}
							onBlur={() => form.validateMnemonic()}
							onChangeText={e => form.mnemonicOnChange(e)}
							style={{height: 100}}
						/>
					</Item>
				</Form>
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
			</View>
		)
		return <Recover restoreForm={Fields} onRecover={(pin: string) => this.restore(pin)} goToSignup={this.goToSignup} checkForm={this.checkFormValidity} />
	}
}
