import * as React from "react"
import { Icon } from "native-base"
import { observer, inject } from "mobx-react/native"

import Profile from "stories/screens/home-tabs/Profile"
import commonColor from 'theme/variables/commonColor'

export interface Props {
	navigation: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@observer
export default class ProfileContainer extends React.Component<Props, State> {
	render() {
		const { navigation, profileStore: { profileData, interests, profileCompletionPercentage } } = this.props

		const iconStyle = {
			color: commonColor.brandSecondary,
			fontSize: 40,
			marginTop: 14,
			marginBottom: 6,
		}

		const list = [
			{ image: <Icon style={iconStyle} name="ios-person" />, footerText: 'Personal' },
			{ image: <Icon style={iconStyle} name="md-school" />, footerText: 'Educational' },
			{ image: <Icon style={iconStyle} name="ios-card" />, footerText: 'Financial' },
			{ image: <Icon style={iconStyle} name="ios-wine" />, footerText: 'Lifestyle' },
			{ image: <Icon style={iconStyle} name="ios-body" />, footerText: 'Physical' },
			{ image: <Icon style={iconStyle} name="ios-briefcase" />, footerText: 'Professional' },
			// { image: <Icon style={iconStyle} name="ios-star" />, footerText: 'Veteran' },
		]

		return <Profile navigation={navigation} informationCategories={list} profileData={profileData} interests={interests} profileCompletionPercentage={profileCompletionPercentage}/>
	}
}
