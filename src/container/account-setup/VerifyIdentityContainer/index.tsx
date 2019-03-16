// @flow
import * as React from 'react'
import { Image } from 'react-native'
import { Item, Input, Icon, Form, Toast, View, Button, Text } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import { getPhoto } from 'utils/camera'

import language from 'language'

const { formErrors } = language

import VerifyIdentity from 'screens/account-setup/VerifyIdentity'
import general from 'theme/general'
import styles from 'screens/account-setup/VerifyIdentity/styles'

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
export default class VerifyIdentityContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.submit = this.submit.bind(this)
		this.checkForm = this.checkForm.bind(this)
		this.takeIdPhoto = this.takeIdPhoto.bind(this)
		this.storeSelfieVideo = this.storeSelfieVideo.bind(this)
	}

	async submit() {
    try {
			await this.props.accountSetupForm.verifyIdentity()
			this.props.navigation.navigate('SetupLocation')
    } catch (error) {
			console.log('ERROR UPLOADING ID DOCS:', error)
			Toast.show({ type: 'danger', text: 'There was an error confirming your identity, please wait for customer support', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
    }
	}
	
	checkForm() {

	}

	storeSelfieVideo(selfieVideo) {
		this.props.accountSetupForm.onChange({ selfieVideo })
	}

	async takeIdPhoto() {
    try {
      const { mime, data } = await getPhoto(true)

			if (!data || !mime) {
				throw new Error('Didn\'t take pic')
			}

			this.props.accountSetupForm.onChange({ idPhoto: { mime, data } })
    } catch (error) {
      console.log('ERROR WITH IMAGE PICKER', error)
    }
  }

	render() {
		const { props: { accountSetupForm: { idPhoto: { data, mime }, selfieVideo } } } = this
		const idPhotoSource: any = { uri: `data:${mime};base64,${data}` }

		const Fields = (
			<Form>
				<View padder>
					<Button block onPress={this.takeIdPhoto}>
						<Text>Take Photo of ID</Text>
						{data && <Icon name="ios-checkmark-circle-outline" style={styles.checkmark}/>}
					</Button>
				</View>
				{/* this needs to show the photo */}
				{!!data && <View style={general.centeredColumn}>
					<Image resizeMode="contain" style={{height: 320, width: 240, transform: [{rotate: '270deg'}]}} source={idPhotoSource}/>
				</View>}
			</Form>
		)
		return <VerifyIdentity identityForm={Fields} submitIdentity={this.submit} checkForm={this.checkForm} canSubmit={data && selfieVideo.uri} selfieVideo={selfieVideo} storeSelfieVideo={this.storeSelfieVideo} />
	}
}
