import * as React from "react"
import { Icon } from "native-base"
import { observer, inject } from "mobx-react/native"

import Profile from "screens/home-tabs/Profile"
import commonColor from 'theme/variables/commonColor'

export interface Props {
	navigation: any,
	profileStore: any,
	groupStore: any,
	userStore: any,
	verifiedStore: any,
}
export interface State {}

@inject("userStore")
@inject("profileStore")
@inject("groupStore")
@inject("verifiedStore")
@observer
export default class ProfileContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		// PRIMARY LOADING SECTION FOR THE APP
		this.loadUserData()
	}

	async loadUserData() {
		try {
			const { address, privateKeyHex, pin } = this.props.userStore
			const { city, state, country, dateOfBirth } = this.props.profileStore.profileData
			
			const [ shouldPrompt ] = await Promise.all([
				this.props.profileStore.shouldPrompt(pin),
				this.props.profileStore.loadData(pin),
				this.props.groupStore.connectToServer(address, privateKeyHex)
			])
			
			await this.props.groupStore.loadData({ city, state, country })
			this.props.groupStore.sortEventsByInterest(this.props.profileStore.interests)

			if (shouldPrompt) {
				const promptQuestions = await this.props.verifiedStore.getPromptQuestions({ dateOfBirth })
				this.props.navigation.navigate('DataInputPrompt', { promptQuestions })
			}
		} catch(error) {
			console.log('ERROR LOADING AND SHOWING PROMPT:', error)
		}
	}

	render() {
		const { navigation, profileStore: { profileData, interests, getAge } } = this.props

		return <Profile navigation={navigation} profileData={profileData} interests={interests} getAge={getAge} />
	}
}
