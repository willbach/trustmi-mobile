import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'
import GetImage from 'ui/custom-components/GetImage'
import MembersDisplay from 'ui/custom-components/MembersDisplay'
import Interests from 'ui/custom-components/Interests'
import { formatMemberCount } from 'utils/format'

import Group from 'types/Group'
import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  userId: string
  navigation: any
  group: Group
}
export interface State {
  searchTerm?: string
}

class Events extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.searchEvents = this.searchEvents.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }
  
  searchEvents(searchTerm) {
    this.setState({ searchTerm })
  }

  render() {
    const { props: { userId, navigation, group: { id, name, city, state, members, organizers, about, events, interests } }, state: { searchTerm } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <HeaderSearchBar placeholder="Search Events" searchTerm={searchTerm} onChangeText={this.searchEvents} />
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>{JSON.stringify(events)}</Text>
        </Content>
      </Container>
    )
  }
}

export default Events
