import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Search from "screens/home-tabs/Search"

export interface Props {
	navigation: any,
	groupStore: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@inject("groupStore")
@observer
export default class SearchContainer extends React.Component<Props, State> {
	render() {
		const { profileStore: { interests, profileData: { city, state } }, groupStore: { groups, availableGroups, availableInterests, eventsByInterest } } = this.props
		return <Search navigation={this.props.navigation} interests={interests} availableInterests={availableInterests} groups={groups} availableGroups={availableGroups} eventsByInterest={eventsByInterest} location={`${city}, ${state}`} />
	}
}
