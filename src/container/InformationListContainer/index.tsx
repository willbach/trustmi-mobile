import * as React from "react"
import { observer, inject } from "mobx-react/native"

import InformationList from "screens/InformationList"
import data from "./data"

export interface Props {
	navigation: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@observer
export default class InformationListContainer extends React.Component<Props, State> {
	componentWillMount() {
		const { state : { params : { category } } } = this.props.navigation

		this.props.profileStore.fetchItems(data[category])
	}
	
	render() {
		const list = this.props.profileStore.items.toJS()
		const { state : { params : { category } } } = this.props.navigation

		return <InformationList navigation={this.props.navigation} title={category} list={list} />
	}
}
