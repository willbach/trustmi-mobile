import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Home from "stories/screens/home-tabs/Home"

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
		const { address, privateKeyHex } = this.props.userStore
		await this.props.groupStore.loadData()
		await this.props.profileStore.loadData()
		await this.props.groupStore.connectToServer(address, privateKeyHex)
		this.props.groupStore.sortEventsByInterest(this.props.profileStore.interests)
	}
	
	render() {
		const { profileStore: { profileCompletionPercentage }, groupStore: { groups, availableGroups, events } } = this.props

		console.log('EVENTS', events)

		return <Home navigation={this.props.navigation} groups={groups} availableGroups={availableGroups} events={events.toJS()} profileCompletionPercentage={profileCompletionPercentage} />
	}
}
