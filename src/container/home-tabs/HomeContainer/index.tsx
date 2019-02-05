import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Home from "screens/home-tabs/Home"

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
export default class HomeContainer extends React.Component<Props, State> {
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
		const { profileStore: { profileCompletionPercentage }, groupStore: { groups, availableGroups, events } } = this.props

		return <Home navigation={this.props.navigation} groups={groups} availableGroups={availableGroups} events={events.toJS()} profileCompletionPercentage={profileCompletionPercentage} />
	}
}
