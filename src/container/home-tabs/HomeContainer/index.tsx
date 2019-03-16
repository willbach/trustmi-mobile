import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Home from "screens/home-tabs/Home"

export interface Props {
	navigation: any,
	groupStore: any,
	userStore: any,
	verifiedStore: any,
}
export interface State {}

@inject("userStore")
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
			const { props: { userStore: { city, state, country, dateOfBirth, interests } } } = this
			
			const shouldPrompt = await this.props.userStore.shouldPrompt()
			
			// await this.props.groupStore.loadData({ city, state, country })
			// this.props.groupStore.sortEventsByInterest(interests)

			if (shouldPrompt) {
				const promptQuestions = await this.props.verifiedStore.getPromptQuestions({ dateOfBirth })
				this.props.navigation.navigate('DataInputPrompt', { promptQuestions })
			}
		} catch(error) {
			console.log('ERROR LOADING AND SHOWING PROMPT:', error)
		}
	}
	
	render() {
		const { userStore: { profileCompletionPercentage }, groupStore: { groups, availableGroups, events } } = this.props

		return <Home navigation={this.props.navigation} groups={groups} availableGroups={availableGroups} events={events.toJS()} profileCompletionPercentage={profileCompletionPercentage} />
	}
}
