import * as React from 'react'
import { BackHandler, Linking } from 'react-native'
import { Container, Content, Button, Text, View, Icon, Toast } from 'native-base'

import LogoHeader from 'ui/custom-components/LogoHeader'
import Pinpad from 'ui/custom-components/Pinpad'
import BlurModal from 'ui/custom-components/BlurModal'

import generalStyle from 'theme/general'
import styles from './styles'

//import styles from './styles'
export interface Props {
  onSignup: Function
  goToRecover: () => void
	signupForm: any
  checkForm: Function
  takePhotoId: () => void
  takeSelfie: () => void
  photoIdTaken: boolean
  selfieTaken: boolean
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
		
    this.submit = this.submit.bind(this)
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

  componentDidUpdate() {
    const { pin, confirmPIN, step } = this.state

    if (step === 4) {
      if (pin === confirmPIN) {
        setTimeout(() => {
          this.props.onSignup(pin)
        }, 100)
      } else if (confirmPIN.length === 4) {
        Toast.show({ type: 'danger', text: 'PINs do not match, please reenter your PIN', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
        this.setState({ pin: '', confirmPIN: '', step: 2, infoModalVisible: false })
      }
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
    const { state: { pin, confirmPIN, step, infoModalVisible }, props: { takePhotoId, takeSelfie, photoIdTaken, selfieTaken } } = this
    
    let content
		if (step === 4) {
      content = <View style={styles.pinpadContainer}>
        <Pinpad onNumPress={() => null} onBackspace={() => null} pin={confirmPIN} headerText={'Please Wait'} textStyle={styles.pinpadText} headerStyle={styles.pinpadHeader} circlesStyleHollow={styles.pinpadHollow} circlesStyleSolid={styles.pinpadSolid} />
      </View>
    } else if (step === 3) {
      content = <View style={styles.pinpadContainer}>
        <Pinpad onNumPress={(pin) => this.confirmPIN(pin)} onBackspace={() => this.clearConfirmPIN()} pin={confirmPIN} headerText={'Confirm Your PIN'} textStyle={styles.pinpadText} headerStyle={styles.pinpadHeader} circlesStyleHollow={styles.pinpadHollow} circlesStyleSolid={styles.pinpadSolid} />
      </View>
    } else if (step === 2) {
      content = <View style={styles.pinpadContainer}>
        <Pinpad onNumPress={(pin) => this.enterPin(pin)} onBackspace={() => this.clearPin()} pin={pin} headerText={'Enter New PIN'} textStyle={styles.pinpadText} headerStyle={styles.pinpadHeader} circlesStyleHollow={styles.pinpadHollow} circlesStyleSolid={styles.pinpadSolid} />
      </View>
    } else {
      content = <Content>
        <View padder style={generalStyle.flexRowAround} >
          <Button block onPress={takePhotoId} style={styles.photoButton}>
            {/* <View style={generalStyle.flexRowCenter}> */}
              <Text style={styles.photoButtonText}>Add Photo ID</Text>
              {photoIdTaken && <Icon name="md-checkmark-circle-outline" style={styles.checkmark} />}
            {/* </View> */}
          </Button>
          <Button block onPress={takeSelfie} style={styles.photoButton}>
            {/* <View style={generalStyle.flexRowCenter}> */}
              <Text style={styles.photoButtonText}>Take Selfie</Text>
              {selfieTaken && <Icon name="md-checkmark-circle-outline" style={styles.checkmark} />}
            {/* </View> */}
          </Button>
        </View>
        <Text style={styles.infoTextButton} onPress={this.showInfoModal}>(Why do we need this?)</Text>
        {this.props.signupForm}
        <View style={[generalStyle.flexRowWrap, styles.termsRow]}>
          <Text style={styles.disclaimer}>By creating an account, you agree to our </Text><Text style={styles.termsLink} onPress={this.linkToTerms}>terms and conditions</Text>
        </View>
        <View padder>
          <Button block onPress={this.submit}>
            <Text>Create Account</Text>
          </Button>
        </View>
        <View padder style={{marginBottom: 30}}>
          <Button block onPress={this.props.goToRecover}>
            <Text>Recover Account</Text>
          </Button>
        </View>
        <BlurModal visible={infoModalVisible} onRequestClose={this.hideInfoModal} transparent blurType="light" blurAmount={10}>
          <View style={[generalStyle.centeredColumn, styles.modalBody]}>
            <Text style={styles.infoText}>{`The Pond ensures that all users are real people by comparing your photo ID, selfie, name, and date of birth.

Your photos are deleted as soon as they are verified, so we never use these photos in the app or anywhere else. 

Acceptable forms of photo ID include Driver's License and Passport.`}</Text>
            <Button style={styles.selectButton} onPress={this.hideInfoModal}><Text>OK</Text></Button>
          </View>
        </BlurModal>
      </Content>
    }
    return (
      <Container>
        <LogoHeader />
        {content}
      </Container>
    )
	}
}
