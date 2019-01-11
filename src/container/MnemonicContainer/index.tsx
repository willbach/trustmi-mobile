// @flow
import * as React from 'react'
import { Clipboard } from 'react-native'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'
const { formErrors } = language

import Mnemonic from 'screens/Mnemonic'

export interface Props {
	navigation: any
	userStore: any
}
export interface State {}

@inject('userStore')
@observer
export default class SignupContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.nextScreen = this.nextScreen.bind(this)
  }
  
  copyToClipboard = (text: string) => {
    Clipboard.setString(text)

    Toast.show({
      text: 'Copied to Clipboard!',
      duration: 2000,
      position: 'top',
      textStyle: { textAlign: 'center' },
    })
  }

	nextScreen() {
    this.props.navigation.navigate('HomeDrawer')
  }

	render() {
		return <Mnemonic mnemonic={this.props.userStore.mnemonic} copy={this.copyToClipboard} nextScreen={this.nextScreen} />
	}
}
