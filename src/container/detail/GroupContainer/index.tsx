import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Group from 'screens/detail/Group'
import Async from 'ui/custom-components/Async'

export interface Props {
	navigation: any,
	profileStore: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class GroupContainer extends React.Component<Props, State> {
	render() {
		const { navigation, navigation: { state: { params: { groupId } } } } = this.props

		return <Async
			navigation={navigation}
			promise={this.props.groupStore.getGroup(groupId)}
			onResolve={(group) => <Group navigation={navigation} group={group} />}
		/>
	}
}
