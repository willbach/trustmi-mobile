import * as React from "react"
import { observer, inject } from "mobx-react/native"

import InformationList from "screens/InformationList"
import { servicesByCategory } from "utils/service-list"

export interface Props {
	navigation: any,
	userStore: any,
}
export interface State {}

@inject("userStore")
@observer
export default class InformationListContainer extends React.Component<Props, State> {
	componentWillMount() {
		const { state : { params : { category } } } = this.props.navigation

		this.props.userStore.fetchItems({ servicesByCategory }[category])
	}
	
	render() {
		const list = this.props.userStore.items.toJS()
		const { state : { params : { category } } } = this.props.navigation

		return <InformationList navigation={this.props.navigation} title={category} list={list} />
	}
}
