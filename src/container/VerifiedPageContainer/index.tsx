import * as React from 'react'
import VerifiedPage from 'screens/VerifiedPage'
import { observer, inject } from 'mobx-react/native'
export interface Props {
	navigation: any
	verifiedStore: any
	userStore: any
}
export interface State {}

@inject('userStore')
@observer
export default class VerifiedPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.getData = this.getData.bind(this)
	}

	getData(username: string, password: string) {
		const { props: { navigation: { state: { params: { service, onContinue } } } } } = this
		this.props.verifiedStore.getData(service, this.props.userStore.pin, username, password)

		if (onContinue) {
			onContinue()
		}
	}

	render() {
		const param = this.props.navigation.state.params
		return <VerifiedPage navigation={this.props.navigation} getData={this.getData} data={this.props.verifiedStore[param.service].data} />
	}
}
