import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'

import Pinpad from 'ui/custom-components/Pinpad'

import commonColor from 'theme/variables/commonColor'

//import styles from './styles'
export interface Props {
  onSignup: Function
  goToRestore: () => void
	signupForm: any
	checkForm: Function
}
export interface State {
	step: number
  pin: string
  confirmPIN: string
}

export default class Signup extends React.Component<Props, State> {
	constructor(props) {
    super(props)
    this.state = {
			pin: '',
			confirmPIN: '',
      step: 1,
		}
		
		this.submit = this.submit.bind(this)
  }

	componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { step } = this.state
    if (step === 1) {
      BackHandler.exitApp()
    } else {
      this.setState({ pin: '', confirmPIN: '', step: step - 1 })
    }
  }

  componentDidUpdate() {
    const { pin, confirmPIN, step } = this.state

    if (step === 4 && pin === confirmPIN) {
      const component = this
      
      setTimeout(() => {
        this.props.onSignup(pin)
      }, 100)
    } else if (pin.length === 4 && confirmPIN.length === 4) {
      this.setState({ step: 4 })
    } else if (pin.length === 4 && step === 2) {
      this.setState({ step: 3 })
    }
  }

  enterPin(num: string) {
    const { pin } = this.state
    const fullPin = pin + num
    this.setState({ pin: fullPin })
  }

  confirmPIN(num: string) {
    const { confirmPIN } = this.state
    const fullPin = confirmPIN + num
    this.setState({ confirmPIN: fullPin })
  }

  clearPin() {
    const { pin } = this.state
    this.setState({ pin: pin.slice(0, -1) })
  }

  clearConfirmPIN() {
    const { confirmPIN } = this.state
    this.setState({ confirmPIN: confirmPIN.slice(0, -1) })
	}
	
	submit() {
		if (this.props.checkForm()) {
			this.setState({ step: 2 })
		}
	}
	
	render() {
		const { pin, confirmPIN, step } = this.state

		if (step === 4) {
      return <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: commonColor.white}}>
        <Pinpad onNumPress={() => null} onBackspace={() => null} pin={confirmPIN} headerText={'Please Wait'} />
      </View>
    } else if (step === 3) {
      return <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: commonColor.white}}>
        <Pinpad onNumPress={(pin) => this.confirmPIN(pin)} onBackspace={() => this.clearConfirmPIN()} pin={confirmPIN} headerText={'Confirm Your PIN'} />
      </View>
    } else if (step === 2) {
      return <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: commonColor.white}}>
        <Pinpad onNumPress={(pin) => this.enterPin(pin)} onBackspace={() => this.clearPin()} pin={pin} headerText={'Enter New PIN'} />
      </View>
    } else {
			return (
				<Container>
					<Header style={{ height: 200 }}>
						<Body style={{ alignItems: 'center' }}>
							<Icon name='flash' style={{ fontSize: 104 }} />
							<Title>ThePond</Title>
							<View padder>
								<Text style={{ color: Platform.OS === 'ios' ? commonColor.black : commonColor.white }} />
							</View>
						</Body>
					</Header>
					<Content>
						{this.props.signupForm}
						<View padder>
							<Button block onPress={this.submit}>
								<Text>Create Account</Text>
							</Button>
						</View>
            <View padder>
							<Button block onPress={this.props.goToRestore}>
								<Text>Restore Account</Text>
							</Button>
						</View>
					</Content>
					{/* <Footer style={{ backgroundColor: '#F8F8F8' }}>
						<View style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}>
							<View padder>
								<Text style={{ color: '#000' }}>Made with love at </Text>
							</View>
							<Image
								source={{ uri: 'https://geekyants.com/images/logo-dark.png' }}
								style={{ width: 422 / 4, height: 86 / 4 }}
							/>
						</View>
					</Footer> */}
				</Container>
			)
		}

	}
}
