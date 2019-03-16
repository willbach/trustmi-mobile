// @flow
import * as React from 'react'
var Geolocation = require('Geolocation')
import { Item, Input, Icon, Form, Toast, View } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

const { formErrors } = language

import SetupLocation from 'screens/account-setup/SetupLocation'
import { rejects } from 'assert';

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
export default class SetupLocationContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.submit = this.submit.bind(this)
	}

	async componentDidMount () {
		try {
			const { coords } = await new Promise((resolve, reject) => Geolocation.getCurrentPosition((result) => resolve(result), (error) => reject(error)))
			const { city, state, country } = await this.props.userStore.getCityForLatLong(coords)
			console.log('GOT THE CITY BACK', city, state, country)
			await this.props.userStore.updateUser({ city, state, country })
		} catch (error) {
			console.log('ERROR GETTING LOCATION:', error)
		}
	}

	async submit() {
		try {
			await this.props.userStore.updateUser({ verificationStage: 'SetupObjectives' })
			this.props.navigation.navigate('SetupObjectives')
    } catch (error) {
			console.log('ERROR SETTING LOCATION:', error)
			Toast.show({ type: 'danger', text: 'There was an error setting your location, please wait for customer support', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
    }
	}

	render() {
		const { userStore: { city, state, country }, navigation } = this.props
		return <SetupLocation submitLocation={this.submit} location={{ city, state, country }} navigation={navigation} />
	}
}
