// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

import UpdateLocation from 'stories/screens/UpdateLocation'
import City from 'types/City'

export interface Props {
	navigation: any
  profileStore: any
  userStore: any
  groupStore: any
  createGroupStore: any
}
export interface State {}

@inject('profileStore')
@inject('userStore')
@inject('groupStore')
@inject('createGroupStore')
@observer
export default class UpdateLocationContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    let refresh
    try { refresh = this.props.navigation.state.params.refresh } catch (e) {}

    this.props.navigation.goBack()

    if (refresh) {
      refresh()
    }
  }
  
	render() {
    const { profileStore, profileStore: { profileData: { city, state } }, groupStore: { availableLocations }, userStore, createGroupStore } = this.props

    const currentLocation = new City({})

    let origin, title, changeLocation, location
    try { origin = this.props.navigation.state.params.origin } catch (e) {}

    if (origin === 'createGroup') {
      title = 'Select Location'
      changeLocation = (location: City) => createGroupStore.updateValue('location', location)
      location = createGroupStore.location
    } else {
      changeLocation = (location: City) => profileStore.changeLocation(userStore.pin, location)
      location = new City({ city, state })
    }

		return <UpdateLocation goBack={this.goBack} changeLocation={changeLocation} location={location} availableLocations={availableLocations} origin={origin} title={title} currentLocation={currentLocation}/>
	}
}
