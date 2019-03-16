import * as React from 'react'
import { Item, Input, Icon, Form, Toast, View } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import SetupConfirmation from 'screens/account-setup/SetupConfirmation'

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
export default class SetupConfirmationContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)
	}

	render() {
		return <SetupConfirmation />
	}
}
