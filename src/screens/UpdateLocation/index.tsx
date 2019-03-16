import * as React from 'react'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Left, Right, List, ListItem } from 'native-base'

import { HeaderSearchBar } from 'ui/custom-components'

import general from 'theme/general'
import styles from './styles'
import City from 'types/City'

export interface Props {
  goBack: () => void
  changeLocation: (location: City) => void
  searchLocations: (cityQuery: string) => void
  location: City
  currentLocation: City
  locations: City[]
  title?: string
  origin?: string
}

export interface State {
  city?: string
}

export default class UpdateLocation extends React.Component<Props, State> {
	constructor(props) {
    super(props)

    this.state = {}

    this.setSearchTerm = this.setSearchTerm.bind(this)
  }

  getIcon(location: City) {
    const { location: { city, state }, currentLocation } = this.props
    if (location.city === city && location.state === state) {
      return <Icon name="ios-pin" />
    } else if (currentLocation.city === location.city && currentLocation.state === location.state) {
      return <Icon name="md-locate" />
    } else {
      return null
    }
  }

  setSearchTerm(searchTerm: string) {
    this.props.searchLocations(searchTerm)
    this.setState({ city: searchTerm })
  }

	render() {
    const { props: { changeLocation, locations, title, goBack, searchLocations }, state: { city } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{title || 'Update Location'}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.smallTopMargin}/>
          <View style={general.smallHMargin}>
            <HeaderSearchBar type="dark" placeholder="Search Cities" searchTerm={city} onChangeText={this.setSearchTerm} />
          </View>
          <List>
            {locations.map((location, i) => (
              <ListItem key={i} onPress={() => {
                changeLocation(location)
                goBack()
              }}>
                <Left style={general.flexRow}>
                  {this.getIcon(location)}
                  <Text>{`${location.city}, ${location.state}`}</Text>
                </Left>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
	}
}
