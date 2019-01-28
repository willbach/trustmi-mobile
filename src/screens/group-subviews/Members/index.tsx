import * as React from 'react'
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, View } from 'native-base'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'
import GetImage from 'ui/custom-components/GetImage'
import { formatMemberCount } from 'utils/format'

import Member from 'types/Member'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  userId: string
  navigation: any
  members: Member[]
  groupId: string
  groupName: string
  eventId?: string
  eventTitle?: string
}
export interface State {
  searchTerm?: string
}
export default class Members extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {}

    this.goBack = this.goBack.bind(this)
    this.searchMembers = this.searchMembers.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }
  
  searchMembers(searchTerm) {
    this.setState({ searchTerm })
  }

  render() {
    const { props: { userId, navigation, members, groupId, groupName, eventId, eventTitle }, state: { searchTerm } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <HeaderSearchBar placeholder="Search Members" searchTerm={searchTerm} onChangeText={this.searchMembers} />
          </Body>
          <Right />
        </Header>
        <Content>

        </Content>
      </Container>
    )
  }
}
