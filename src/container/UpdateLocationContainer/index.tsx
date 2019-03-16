// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

import UpdateLocation from 'screens/UpdateLocation'
import City from 'types/City'

export interface Props {
	navigation: any
  userStore: any
  groupStore: any
  createGroupStore: any 
  accountSetupForm: any
}
export interface State {
  locations: City[]
}

@inject('userStore')
@inject('groupStore')
@inject('createGroupStore')
@inject('accountSetupForm')
@observer
export default class UpdateLocationContainer extends React.Component<Props, State> {
	constructor(props) {
    super(props)
    
    this.state = {
      locations: []
    }

    this.goBack = this.goBack.bind(this)
    this.searchLocations = this.searchLocations.bind(this)
  }

  async searchLocations(cityQuery: string) {
    try {
      const locations = await this.props.groupStore.searchLocations(cityQuery)
      this.setState({ locations })
    } catch (error) {
      console.log('ERROR SEARCHING CITIES:', error)
    }
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
    const { props: { groupStore, userStore, createGroupStore }, state: { locations } } = this

    const currentLocation = new City({})

    let origin, title, changeLocation, location
    try { origin = this.props.navigation.state.params.origin } catch (e) {}

    if (origin === 'createGroup') {
      title = 'Select Location'
      changeLocation = (location: City) => createGroupStore.updateValue('location', location)
      location = createGroupStore.location
    } else if (origin === 'setupLocation') {
      title = 'Select Location'
      changeLocation = async (location: City) => {
        try {
          await userStore.updateUser(location)
        } catch (error) {
          console.log('ERROR UPDATING LOCATION:', error, location)
        }
      }
      location = new City(userStore)
    } else {
      changeLocation = async (location: City) => {
        try {
          await userStore.updateUser(location)
        } catch (error) {
          console.log('ERROR UPDATING LOCATION:', error, location)
        }
      }
      location = new City(userStore)
    }

		return <UpdateLocation goBack={this.goBack} searchLocations={this.searchLocations} changeLocation={changeLocation} location={location} locations={locations} origin={origin} title={title} currentLocation={currentLocation}/>
	}
}
