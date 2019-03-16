import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'
import { LogoHeader, SelectLocation } from 'ui/custom-components'

import { City } from '../../../types'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import styles from './styles'

//import styles from './styles'
export interface Props {
  submitLocation: () => void
  location: City
  navigation: any
}

export default class SetupLocation extends React.Component<Props> {
	constructor(props) {
    super(props)

    this.goToUpdateLocation = this.goToUpdateLocation.bind(this)
  }

  goToUpdateLocation() {
    this.props.navigation.navigate('UpdateLocation', { origin: 'setupLocation' })
  }

	render() {
    const { location } = this.props

    return (
      <Container>
        <LogoHeader />
        <Content>
          <Text style={general.h2} onPress={this.goToUpdateLocation}>Tap to Set Your Location</Text>
          <View style={general.standardHMargin}>
            <SelectLocation location={location} onPress={this.goToUpdateLocation}/>
          </View>
          <View padder>
            <Button block onPress={this.props.submitLocation}>
              <Text>Next</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
	}
}
