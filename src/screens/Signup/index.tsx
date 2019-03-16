import * as React from 'react'
import { BackHandler, Linking } from 'react-native'
import { Container, Content, Button, Text, View, Icon, Toast } from 'native-base'

import { LogoHeader } from 'ui/custom-components'
import Pinpad from 'ui/custom-components/Pinpad'
import BlurModal from 'ui/custom-components/BlurModal'

import general from 'theme/general'
import styles from './styles'

//import styles from './styles'
export interface Props {
  onSignup: () => void
  goToRecover: () => void
  signupForm: any
  hasStoredAccount: boolean
}
export interface State {
	step: number
  pin: string
  confirmPIN: string
  infoModalVisible: boolean
}

export default class Signup extends React.Component<Props, State> {
	constructor(props) {
    super(props)
    this.state = {
			pin: '',
			confirmPIN: '',
      step: 1,
      infoModalVisible: false,
		}
		
    this.showInfoModal = this.showInfoModal.bind(this)
    this.hideInfoModal = this.hideInfoModal.bind(this)
    this.linkToTerms = this.linkToTerms.bind(this)
  }

	componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  showInfoModal() {
    this.setState({ infoModalVisible: true })
  }

  hideInfoModal() {
    this.setState({ infoModalVisible: false })
  }

  linkToTerms() {
    Linking.openURL('https://thepond.app/terms')
  }

  onBackPress = () => {
    const { step } = this.state
    if (step === 1) {
      BackHandler.exitApp()
    } else {
      this.setState({ pin: '', confirmPIN: '', step: step - 1 })
    }
  }

	render() {
    return (
      <Container>
        <LogoHeader />
        <Content>
          {this.props.signupForm}
          <View style={[general.flexRowWrap, styles.termsRow]}>
            <Text style={styles.disclaimer}>By creating an account, you agree to our </Text><Text style={styles.termsLink} onPress={this.linkToTerms}>terms and conditions</Text>
          </View>
          <View padder>
            <Button block onPress={this.props.onSignup}>
              <Text>{this.props.hasStoredAccount ? 'Request Login Code' : 'Create Account'}</Text>
            </Button>
          </View>
          <View padder style={{marginBottom: 30}}>
            <Button block onPress={this.props.goToRecover}>
              <Text>Recover Account</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
	}
}

          {/* <BlurModal visible={infoModalVisible} onRequestClose={this.hideInfoModal} transparent blurType="light" blurAmount={10}>
            <View style={[general.centeredColumn, styles.modalBody]}>
              <Text style={styles.infoText}>{`The Pond ensures that all users are real people by comparing your photo ID, selfie, name, and date of birth.

  Your photos are deleted as soon as they are verified, so we never use these photos in the app or anywhere else. 

  Acceptable forms of photo ID include Driver's License and Passport.`}</Text>
              <Button style={styles.selectButton} onPress={this.hideInfoModal}><Text>OK</Text></Button>
            </View>
          </BlurModal> */}