// @flow
import * as React from 'react'
import { Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import { NavigationActions, StackActions } from 'react-navigation'

import DataInputPrompt from 'screens/DataInputPrompt'
import { goToService } from 'utils/navigation';

const startAtDrawer = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'HomeDrawer' })],
})

export interface Props {
	navigation: any
	userStore: any
	verifiedStore: any
}
export interface State {}

@inject('userStore')
@inject('verifiedStore')
@observer
export default class DataInputPromptContainer extends React.Component<Props, State> {
	promptQuestions: string[]

	constructor(props) {
		super(props)

		this.skip = this.skip.bind(this)
		this.onContinue = this.onContinue.bind(this)

		this.promptQuestions = props.navigation.state.params.promptQuestions
	}

	skip() {
		this.props.navigation.dispatch(startAtDrawer)
	}

	setPromptQuestions(selectedQuestions) {
		this.promptQuestions = selectedQuestions
	}

	onContinue(selectedQuestions?: any) {
		const { navigation, navigation: { dispatch } } = this.props

		if (selectedQuestions) {
			this.promptQuestions = selectedQuestions
		}

		console.log('CONTINUTING', this.promptQuestions)
		if (!this.promptQuestions.length) {
			dispatch(startAtDrawer)
		} else {
			const nextService = this.promptQuestions.shift()
			goToService(navigation, nextService, this.onContinue)
		}
	}

	render() {
		return <DataInputPrompt navigation={this.props.navigation} onContinue={this.onContinue} promptQuestions={this.promptQuestions} skip={this.skip} />
	}
}
