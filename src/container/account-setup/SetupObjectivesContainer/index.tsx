// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast, View } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import SetupObjectives from 'screens/account-setup/SetupObjectives'

let submitted = false

export interface Props {
	navigation: any
	userStore: any
	accountSetupForm: any
}
export interface State {}

@inject('userStore')
@inject('accountSetupForm')
@observer
export default class SetupObjectivesContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.submit = this.submit.bind(this)
	}

	async setUserType(userType) {
		try {
			await this.props.userStore.updateUser({ userType })
		} catch (error) {

		}
	}

	async setUserPurpose(userPurpose) {
		try {
			await this.props.userStore.updateUser({ userPurpose })
		} catch (error) {

		}
	}

	async setUserIntro(userIntro) {
		this.props.accountSetupForm.onChange({ userIntro })
	}

	async submit() {
		const { props: { accountSetupForm: { userIntro }, navigation, userStore } }= this
		try {
			await userStore.updateUser({ verificationStage: 'SetupConfirmation', userIntro })
			navigation.navigate('SetupConfirmation')
    } catch (error) {
			console.log('ERROR UPLOADING ID DOCS:', error)
			Toast.show({ type: 'danger', text: 'There was an error setting your location, please wait for customer support', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
    }
	}

	render() {
		const { props: { accountSetupForm: { userIntro } } }= this
		return <SetupObjectives submitObjectives={this.submit} setUserType={this.setUserType.bind(this)} setUserPurpose={this.setUserPurpose.bind(this)} setUserIntro={this.setUserIntro.bind(this)} userIntro={userIntro} />
	}
}
