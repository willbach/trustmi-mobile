import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Members from 'screens/group-subviews/Members'

export interface Props {
	navigation: any,
	userStore: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@inject("userStore")
@observer
export default class MembersContainer extends React.Component<Props, State> {
	render() {
		const { navigation, navigation: { state: { params: { members, groupId, groupName, eventId, eventTitle } } }, userStore: { address } } = this.props

		return <Members userId={address} navigation={navigation} members={members} groupId={groupId} groupName={groupName} eventId={eventId} eventTitle={eventTitle} />
	}
}
