import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Event from 'screens/detail/Event'
import Async from 'ui/custom-components/Async'

export interface Props {
	navigation: any,
	userStore: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@inject("userStore")
@observer
export default class GroupContainer extends React.Component<Props, State> {
	render() {
		const { navigation, navigation: { state: { params: { eventId } } }, userStore: { address } } = this.props

		return <Async
			navigation={navigation}
			promise={this.props.groupStore.getEvent(eventId)}
			onResolve={(event) => <Event userId={address} navigation={navigation} event={event} />}
		/>
	}
}
