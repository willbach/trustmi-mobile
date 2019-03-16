import * as React from 'react'
import { observer, inject } from 'mobx-react/native'
import { Toast } from 'native-base'
import City from 'types/City'
import CreateGroup from 'screens/creation/CreateGroup'

export interface Props {
	navigation: any,
	groupStore: any,
	userStore: any,
	createGroupStore: any
}
export interface State {}

@inject('groupStore')
@inject('userStore')
@inject('createGroupStore')
@observer
export default class CreateGroupContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.createGroup = this.createGroup.bind(this)
	}

	componentWillMount() {
		const { userStore: { city, state, country }, createGroupStore: { updateValue }, createGroupStore } = this.props
		if (!createGroupStore.city && !createGroupStore.state) {
			updateValue('location', new City({ city, state, country }))
		}
	}

	async createGroup() {
		const { createGroupStore: { name, about, location: { city, state, country }, interests }, groupStore: { createGroup }, navigation } = this.props

		try {
			const groupId = await createGroup({ name, about, city, state, country, interests })
			navigation.navigate('Group', { groupId })
			Toast.show({
				text: 'Your group has been created! Add an event to get started',
				duration: 3000,
				position: 'bottom',
				textStyle: { textAlign: 'center' },
			})
		} catch (error) {
			console.log('ERROR CREATING GROUP:', error)
			navigation.navigate('Home')
			Toast.show({
				type: 'danger',
				text: 'There was an error creating your group, please try again later',
				duration: 2000,
				position: 'bottom',
				textStyle: { textAlign: 'center' },
			})
		}
	}

	render() {
		const { createGroupStore: { name, about, location, interests, updateValue, refresh }, userStore: { pic } } = this.props

		return <CreateGroup
			navigation={this.props.navigation}
			createGroup={this.createGroup}
			profilePic={pic}
			name={name}
			about={about}
			location={location}
			interests={interests}
			updateValue={updateValue}
			refresh={refresh}
		/>
	}
}
