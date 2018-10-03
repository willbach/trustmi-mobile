// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import Sidebar from 'stories/screens/Sidebar'

export interface Props {
	navigation: any,
	userStore: any
}
export interface State {}

@inject('userStore')
@observer
export default class SidebarContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.onLogout = this.onLogout.bind(this)
	}

	onLogout() {
		this.props.userStore.logoutUser()
	}

	render() {
		return <Sidebar navigation={this.props.navigation} onLogout={this.onLogout} />
	}
}
