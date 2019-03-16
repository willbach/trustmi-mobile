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

		// PRIMARY LOADING SECTION FOR THE APP
		this.loadUserData()
	}

	async loadUserData() {
		try {
			const { props: { userStore, userStore: { city, state, country, dateOfBirth, interests }, groupStore } } = this
			
			const shouldPrompt = await userStore.shouldPrompt()
			
			// await this.props.groupStore.loadData({ city, state, country })
			// this.props.groupStore.sortEventsByInterest(interests)

			if (shouldPrompt) {
				const promptQuestions = await this.props.verifiedStore.getPromptQuestions({ dateOfBirth })
				this.props.navigation.navigate('DataInputPrompt', { promptQuestions })
			}
		} catch(error) {
			console.log('ERROR LOADING AND SHOWING PROMPT:', error)
		}
	}

	async updateUser(data) {
		try {
			await this.props.userStore.updateUser(data)
			this.props.userStore.refresh()
		} catch (error) {
			console.log('ERROR HERE')
		}
	}

	editProfile() {
		this.props.navigation.navigate('EditProfile')
	}

	render() {
		const { navigation, userStore: { id, first, last, city, state, linkedinUrl, title, companyName, userPurpose, userType, userIntro,
			skills, certifications, positions, getFinancials, tests, schools } } = this.props

		const financials = getFinancials()

		return <Profile navigation={navigation} editProfile={this.editProfile.bind(this)} id={id} first={first} last={last} city={city}
			state={state} linkedinUrl={linkedinUrl} title={title} companyName={companyName} userPurpose={userPurpose} userType={userType}
			userIntro={userIntro} financials={financials} skills={skills} certifications={certifications} positions={positions} tests={tests}
			schools={schools} updateUser={this.updateUser.bind(this)} />
	}
}
