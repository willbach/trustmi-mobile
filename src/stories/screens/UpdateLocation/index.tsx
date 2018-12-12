import * as React from 'react'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Left, Right, List, ListItem } from 'native-base'

import general from 'theme/general'
import styles from './styles'
import City from 'types/City'

export interface Props {
  goBack: () => void
  changeLocation: (location: City) => void
  location: City
  currentLocation: City
  availableLocations: City[]
  title?: string
  origin?: string
}

export default class UpdateLocation extends React.Component<Props> {
	constructor(props) {
    super(props)
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

	render() {
    const { changeLocation, availableLocations, title, goBack } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{!!title ? title : 'Update Location'}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.largeTopMargin}/>
          <List>
            {availableLocations.map((location, i) => (
              <ListItem key={i} onPress={() => {
                changeLocation(location)
                goBack()
              }}>
                <Left style={general.flexRow}>
                  {this.getIcon(location)}
                  <Text>{`${location.city}, ${location.state}`}</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
	}
}
