import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'

import Group from 'types/Group'
import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  navigation: any
  event: Event
  group: Group
}
export interface State {
  searchTerm?: string
}
class EventDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.searchGroup = this.searchGroup.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }
  
  searchGroup(searchTerm) {
    this.setState({ searchTerm })
  }

  render() {
    const { props: { navigation, event, group }, state: { searchTerm } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <HeaderSearchBar placeholder="Search Event" searchTerm={searchTerm} onChangeText={this.searchGroup} />
          </Body>
          <Right />
        </Header>
        <Content>
          
        </Content>
      </Container>
    )
  }
}

export default EventDetail
