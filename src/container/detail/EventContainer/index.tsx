import * as React from "react"
import { observer, inject } from "mobx-react/native"

import EventDetail from "stories/screens/detail/Event"

export interface Props {
	navigation: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class EventContainer extends React.Component<Props, State> {
	
	render() {
		const { groupStore: { findEventGroup } } = this.props

		const { navigation: { state: { params: { event } } } } = this.props

		//logic to handle when there isn't an event?

		const group = findEventGroup(event.groupId)

		return <EventDetail navigation={this.props.navigation} event={event} group={group} />
	}
}
