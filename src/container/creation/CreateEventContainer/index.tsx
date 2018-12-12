import * as React from "react"
import { observer, inject } from "mobx-react/native"

import CreateEvent from "stories/screens/creation/CreateEvent"

export interface Props {
	navigation: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class CreateEventContainer extends React.Component<Props, State> {
	render() {
		const { groupStore: { createEvent } } = this.props

		const { navigation: { state: { params: { groupId } } } } = this.props

		return <CreateEvent navigation={this.props.navigation} createEvent={createEvent} groupId={groupId} />
	}
}
