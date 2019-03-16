import * as React from 'react'
import { RNCamera } from 'react-native-camera'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'
import { LogoHeader, BlurModal } from 'ui/custom-components'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import styles from './styles'

//import styles from './styles'
export interface Props {
  submitIdentity: () => void
  identityForm: any
  checkForm: Function
  canSubmit: boolean
  selfieVideo: any
  storeSelfieVideo: (video: any) => void
}

export interface State {
  showModal: boolean
  isRecording: boolean
}

export default class VerifyIdentity extends React.Component<Props, State> {
	constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isRecording: false,
    }

    this.stopVid = this.stopVid.bind(this)
    this.takeVid = this.takeVid.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  camera: any

  showModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  takeVid() {
    const options = {
      quality: RNCamera.Constants.VideoQuality['480p'],
      orientation: 'portrait',
      maxDuration: 2,
      mute: true,
    }
    this.setState({ isRecording: true })
    this.camera.recordAsync(options)
      .then((data) => {
        console.log('SELFIE VIDEO:', data)
        this.props.storeSelfieVideo(data)
      })
      .catch((error) => {
        console.error('ERROR TAKING SELFIE VIDEO:', error)
      })
  }

  stopVid(){
    this.setState({ isRecording: false })
    this.camera.stopRecording()
  }

	render() {
    const { state: { showModal, isRecording }, props: { canSubmit, selfieVideo } } = this
    return (
      <Container>
        <LogoHeader />
        <Content>
          <View padder style={general.centeredColumn}>
            <Text style={general.h2}>Verify Your Identity</Text>
            <Text>We take our responsibilities to our users seriously, and want to ensure that every co-founder we match is a real person.</Text>
            <Text></Text>
            <Text>Please take photo of your ID and a 2-second video holding your ID next to your face to confirm your identity.</Text>
          </View>
          {this.props.identityForm}
          <View padder>
            <Button block onPress={this.showModal} style={general.flexRow}>
              <Text>Record 2-Second Selfie Video</Text>
              {selfieVideo.uri && <Icon name="ios-checkmark-circle-outline" style={styles.checkmark}/>}
            </Button>
          </View>
          {canSubmit && <View padder>
            <Button block onPress={this.props.submitIdentity}>
              <Text>Submit</Text>
            </Button>
          </View>}
        </Content>
        <BlurModal visible={showModal} onRequestClose={this.closeModal} transparent blurType="light" blurAmount={10}>
          <View style={[general.centeredColumn, styles.modalBody]}>
            <RNCamera ref={(cam) => { this.camera = cam }} style={styles.preview} captureAudio={false} type={RNCamera.Constants.Type.front}></RNCamera>
            <Button style={[styles.selectButton, general.centeredColumn]} onPress={isRecording ? this.stopVid : this.takeVid}>
              <Text>{`${isRecording ? 'Stop' : 'Start'} Recording`}</Text>
            </Button>
            <Button style={[styles.selectButton, general.flexRow]} onPress={this.closeModal}>
              <Text>Done</Text>
              {selfieVideo.uri && <Icon name="ios-checkmark-circle-outline" style={styles.checkmark}/>}
            </Button>
          </View>
        </BlurModal>
      </Container>
    )
	}
}
