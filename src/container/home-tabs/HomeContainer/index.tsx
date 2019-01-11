import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Home from "screens/home-tabs/Home"

export interface Props {
	navigation: any,
	profileStore: any,
	groupStore: any,
	userStore: any,
}
export interface State {}

@inject("userStore")
@inject("profileStore")
@inject("groupStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	async componentWillMount() {
		// PRIMARY LOADING SECTION FOR THE APP
		const { address, privateKeyHex, pin } = this.props.userStore
		
		await Promise.all([
			this.props.profileStore.loadData(pin),
			this.props.groupStore.connectToServer(address, privateKeyHex)
		])
		
		const { city, state, country } = this.props.profileStore.profileData
		
		await this.props.groupStore.loadData({ city, state, country })
		this.props.groupStore.sortEventsByInterest(this.props.profileStore.interests)
	}
	
	render() {
		const { profileStore: { profileCompletionPercentage }, groupStore: { groups, availableGroups, events } } = this.props

		return <Home navigation={this.props.navigation} groups={groups} availableGroups={availableGroups} events={events.toJS()} profileCompletionPercentage={profileCompletionPercentage} />
	}
}
