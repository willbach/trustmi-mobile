import * as React from 'react'
import { observer, inject } from 'mobx-react/native'
import { Toast } from 'native-base'

import CreateEvent from 'screens/creation/CreateEvent'

export interface Props {
	navigation: any
	groupStore: any
	createEventStore: any
}
export interface State {}

@inject('groupStore')
@inject('createEventStore')
@observer
export default class CreateEventContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.createEvent = this.createEvent.bind(this)
	}

	componentWillMount() {
		const { createEventStore: { updateValue }, createEventStore, navigation: { state: { params: { group: { city, state, country, interests } } } } } = this.props
		if (!createEventStore.city && !createEventStore.state) {
			updateValue('city', city)
			updateValue('state', state)
			updateValue('country', country)
			updateValue('interests', interests)
		}
	}

	async createEvent(isDraft: boolean) {
		const { createEventStore: { title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents }, navigation,
		navigation: { state: { params: { group } } } } = this.props

		console.log(1, { title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents, isDraft })

		try {
			const eventId = await this.props.groupStore.createEvent({ groupId: group.id, title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents, isDraft })
			navigation.navigate('Event', { eventId })
			Toast.show({
				text: 'Your event has been created!',
				duration: 3000,
				position: 'bottom',
				textStyle: { textAlign: 'center' },
			})
		} catch (error) {
			console.log('ERROR CREATING EVENT', error)
			navigation.navigate('Group', { groupId: group.id })
			Toast.show({
				type: 'danger',
				text: 'There was an error creating your event, please try again later',
				duration: 2000,
				position: 'bottom',
				textStyle: { textAlign: 'center' },
			})
		}
	}

	render() {
		const { createEventStore: { title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents, refresh, updateValue } } = this.props

		const { navigation: { state: { params: { group } } } } = this.props

		return <CreateEvent
			navigation={this.props.navigation}
			createEvent={this.createEvent}
			group={group}
			title={title}
			about={about}
			directionsParking={directionsParking}
			street={street}
			city={city}
			state={state}
			country={country}
			startTime={startTime}
			endTime={endTime}
			interests={interests}
			documents={documents}
			updateValue={updateValue}
			refresh={refresh}
		/>
	}
}
