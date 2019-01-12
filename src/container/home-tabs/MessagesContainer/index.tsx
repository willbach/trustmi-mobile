import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Messages from "screens/home-tabs/Messages"

export interface Props {
	navigation: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class MessagesContainer extends React.Component<Props, State> {
	render() {
		const { groupStore: { chats, notifications, lastLogin } } = this.props
		return <Messages navigation={this.props.navigation} chats={chats} notifications={notifications} lastLogin={lastLogin} />
	}
}
