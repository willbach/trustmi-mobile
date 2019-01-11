import * as React from "react"
import { observer, inject } from "mobx-react/native"

import CreateChat from "screens/creation/CreateChat"

export interface Props {
	navigation: any,
	groupStore: any,
}
export interface State {}

@inject("groupStore")
@observer
export default class CreateChatContainer extends React.Component<Props, State> {
	render() {
		const { groupStore: { createChat } } = this.props

		const { navigation: { state: { params: { groupId } } } } = this.props

		return <CreateChat navigation={this.props.navigation} createChat={createChat} groupId={groupId} />
	}
}
