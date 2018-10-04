import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'

import commonColor from 'theme/variables/commonColor'

import Pinpad from 'ui/components/Pinpad'
//import styles from './styles';
export interface Props {
	onLogin: Function
}
export interface State {
	step: number
  pin: string
}

export default class Login extends React.Component<Props, State> {
	constructor(props) {
    super(props)
    this.state = {
			pin: '',
      step: 1,
		}
  }

	componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    if (this.state.pin.length === 0) {
      BackHandler.exitApp()
    } else if (this.state.step === 1) {
      this.clearPin()
    }
  }

  componentDidUpdate() {
    const { pin, step } = this.state

    if (step === 2) {
			const component = this
			
      setTimeout(async () => {
        await component.props.onLogin(pin)
      }, 1000)

    } else if (pin.length === 4 && step === 1) {
      this.setState({ step: 2 })
    }
  }

  enterPin(num: string) {
    const { pin } = this.state
    const fullPin = pin + num
    this.setState({ pin: fullPin })
  }

  clearPin() {
    const { pin } = this.state
    this.setState({ pin: pin.slice(0, -1) })
  }
	
	render() {
		const { pin, step } = this.state

		if (step === 2) {
      return <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: commonColor.white}}>
        <Pinpad onNumPress={() => null} onBackspace={() => null} pin={pin} headerText={'Please Wait'} />
      </View>
    }
    return <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: commonColor.white}}>
      <Pinpad onNumPress={(pin) => this.enterPin(pin)} onBackspace={() => this.clearPin()} pin={pin} headerText={'Please Enter Your PIN'} />
    </View>
	}
}
