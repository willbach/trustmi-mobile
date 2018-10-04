import * as React from 'react'
import VerifiedPage from 'stories/screens/VerifiedPage'
import { observer, inject } from 'mobx-react/native'
export interface Props {
	navigation: any
	verifiedStore: any
	userStore: any
}
export interface State {}

@inject('verifiedStore')
@inject('userStore')
@observer
export default class VerifiedPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.getData = this.getData.bind(this)
	}

	getData(username: string, password: string) {
		const param = this.props.navigation.state.params
		this.props.verifiedStore.storeData(param.service, this.props.userStore.pin, username, password)
	}

	render() {
		const param = this.props.navigation.state.params
		console.log('PARAMS', param)
		return <VerifiedPage navigation={this.props.navigation} verifiedStore={this.props.verifiedStore} userStore={this.props.userStore} getData={this.getData} />
	}
}
