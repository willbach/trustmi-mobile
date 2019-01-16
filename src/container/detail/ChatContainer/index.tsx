import * as React from "react"
import { observer, inject } from "mobx-react/native"

import ChatDetail from 'screens/detail/Chat'
import Chat from 'types/Chat'

export interface Props {
	navigation: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class ChatContainer extends React.Component<Props, State> {
	render() {
		const { groupStore: { findEventGroup } } = this.props

		const { navigation: { state: { params: { chat } } } } = this.props

		const group = findEventGroup(chat.groupId)

		return <ChatDetail navigation={this.props.navigation} chat={chat} group={group} />
	}
}
