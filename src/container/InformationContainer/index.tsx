import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Information from "../../stories/screens/Information"
import data from "./data"

export interface Props {
	navigation: any,
	mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
export default class InformationContainer extends React.Component<Props, State> {
	componentWillMount() {
		this.props.mainStore.fetchItems(data)
	}
	
	render() {
		const list = this.props.mainStore.items.toJS()
		return <Information navigation={this.props.navigation} list={list} />
	}
}
