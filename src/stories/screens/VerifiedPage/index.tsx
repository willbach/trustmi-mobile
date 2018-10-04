import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View, Form, Item, Input } from 'native-base'

import styles from './styles'
export interface Props {
	navigation: any
	verifiedStore: any
	userStore: any
	getData: Function
}
export interface State {
	username: string
	password: string
}
export default class VerifiedPage extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
		}

		this.changeUsername = this.changeUsername.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.submit = this.submit.bind(this)
	}
	
	changeUsername(username: string) {
		this.setState({ username })
	}

	changePassword(password: string) {
		this.setState({ password })
	}

	submit() {
		const { username, password } = this.state
		this.props.getData(username, password)
		this.setState({ username: '', password: '' })
	}

	render() {
		const param = this.props.navigation.state.params
		const data = this.props.userStore[param.service]
		const { username, password } = this.state

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name='ios-arrow-back' />
						</Button>
					</Left>

					<View padder>
						<Body style={{ flex: 3 }}>
							<Title>{param ? param.name : 'Blank Page'}</Title>
						</Body>
					</View>
					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name : 'Create Something Awesome . . .'}</Text>
					<Form>
						<Item /*error={form.emailError ? true : false}*/>
							<Icon active name='person' />
							<Input
								placeholder='Username'
								keyboardType='email-address'
								/*ref={c => (this.emailInput = c)}*/
								/*onBlur={() => form.validateEmail()}*/
								value={username}
								onChangeText={this.changeUsername}
							/>
						</Item>
						<Item /*error={form.emailError ? true : false}*/>
							<Icon active name='ios-lock' />
							<Input
								placeholder='Password'
								keyboardType='default'
								/*ref={c => (this.emailInput = c)}*/
								/*onBlur={() => form.validateEmail()}*/
								secureTextEntry={true}
								value={password}
								onChangeText={this.changePassword}
							/>
						</Item>
					</Form>
					<Button block onPress={this.submit}>
						<Text>Get Your Data!</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
