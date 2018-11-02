import * as React from "react"
import { observer, inject } from "mobx-react/native"

import Groups from "../../stories/screens/Groups"
import data from "./data"

export interface Props {
	navigation: any,
	mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
export default class GroupsContainer extends React.Component<Props, State> {
	componentWillMount() {
		this.props.mainStore.fetchItems(data)
	}
	
	render() {
		const list = this.props.mainStore.items.toJS()
		return <Groups navigation={this.props.navigation} list={list} />
	}
}
