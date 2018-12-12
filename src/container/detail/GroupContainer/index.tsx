import * as React from "react"
import { observer, inject } from "mobx-react/native"

import GroupDetail from "stories/screens/detail/Group"
import Group from 'types/Group'

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
		const { groupStore: { findEventGroup } } = this.props

		const { navigation: { state: { params: { group } } } } = this.props

		return <GroupDetail navigation={this.props.navigation} group={group} />
	}
}
