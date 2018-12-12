import * as React from "react"
import { observer, inject } from "mobx-react/native"
import { Toast } from 'native-base'
import City from 'types/City'

import CreateGroup from "stories/screens/creation/CreateGroup"
import Group from 'types/Group'

export interface Props {
	navigation: any,
	groupStore: any,
	profileStore: any
	createGroupStore: any
}
export interface State {}

@inject("groupStore")
@inject("profileStore")
@inject("createGroupStore")
@observer
export default class CreateGroupContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.createGroup = this.createGroup.bind(this)
	}

	componentWillMount() {
		const { profileStore: { profileData: { city, state } }, createGroupStore: { updateValue }, createGroupStore } = this.props
		if (!createGroupStore.city && !createGroupStore.state) {
			updateValue('location', new City({ city, state }))
		}
	}

	createGroup() : void {
		const { createGroupStore: { name, description, location, interests }, groupStore: { createGroup }, navigation } = this.props

		createGroup({ name, description, location, interests })
			.then((group: Group) => {
				navigation.navigate('Group', { group })
				Toast.show({
					text: 'Your group has been created! Add an event to get started',
					duration: 3000,
					position: 'bottom',
					textStyle: { textAlign: 'center' },
				})
			})
			.catch(() => {
				navigation.navigate('Home')
				Toast.show({
					text: 'There was an error creating your group, please try again later',
					duration: 2000,
					position: 'bottom',
					textStyle: { textAlign: 'center' },
				})
			})
	}

	render() {
		const { createGroupStore: { name, description, location, interests, updateValue, refresh }, profileStore: { profileData: { pic } } } = this.props

		return <CreateGroup
			navigation={this.props.navigation}
			createGroup={this.createGroup}
			profilePic={pic}
			name={name}
			description={description}
			location={location}
			interests={interests}
			updateValue={updateValue}
			refresh={refresh}
		/>
	}
}
