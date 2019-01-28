import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Events from 'screens/group-subviews/Events'
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
		const { navigation, navigation: { state: { params: { group, groupId } } }, userStore: { address } } = this.props

		if (group) {
			return <Events userId={address} navigation={navigation} group={group} />
		} else {
			return <Async
				navigation={navigation}
				promise={this.props.groupStore.getGroup(groupId)}
				onResolve={(group) => <Events userId={address} navigation={navigation} group={group} />}
			/>
		}
	}
}
