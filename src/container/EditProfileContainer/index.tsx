import * as React from "react"
import { Icon } from "native-base"
import { observer, inject } from "mobx-react/native"

import Profile from "screens/home-tabs/Profile"
import commonColor from 'theme/variables/commonColor'

export interface Props {
	navigation: any,
	groupStore: any,
	userStore: any,
	verifiedStore: any,
}
export interface State {}

@inject("userStore")
@inject("groupStore")
@inject("verifiedStore")
@observer
export default class ProfileContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)
	}

	render() {
		const { navigation, userStore } = this.props

		return <Profile navigation={navigation} userStore={userStore} />
	}
}
