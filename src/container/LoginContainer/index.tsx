// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions } from 'react-navigation'

import Login from 'stories/screens/Login'

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
})

export interface Props {
	navigation: any
	userStore: any
}
export interface State {}

@inject('userStore')
@observer
export default class LoginContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.login = this.login.bind(this)
	}

	async componentWillMount() {
		try {
			const hasStoredUser = await this.props.userStore.checkUserExists()
			console.log('IS THERE A USER', hasStoredUser)
			if (!hasStoredUser) {
				this.props.navigation.navigate('Signup')
			}
		} catch (e) {
			this.props.navigation.navigate('Signup')
		}
	}

	emailInput: any
	pwdinput: any
	async login(pin: string) {
		try {
			const pinCorrect = await this.props.userStore.checkPIN(pin)
			if (pinCorrect) {
				const userLoggedIn = await this.props.userStore.loginUser(pin)
				if (userLoggedIn) {
					this.props.navigation.dispatch(resetAction)
				} else {
					Toast.show({
						text: 'There was an error logging in, please try again later',
						duration: 2000,
						position: 'top',
						textStyle: { textAlign: 'center' },
					})
				}
			} else {
				Toast.show({
					text: 'PIN is incorrect, please try again',
					duration: 2000,
					position: 'top',
					textStyle: { textAlign: 'center' },
				})
			}
		} catch (e) {
			console.log('ERROR LOGGING IN: ', e)
			Toast.show({
				text: 'There was an error logging in, please try again later',
				duration: 2000,
				position: 'top',
				textStyle: { textAlign: 'center' },
			})
		}
	}

	render() {
		return <Login  onLogin={(pin: string) => this.login(pin)} />
	}
}
