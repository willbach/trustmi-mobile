import * as React from 'react'
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { ScrollView } from 'react-native'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'
import GetImage from 'ui/custom-components/GetImage'
import MembersDisplay from 'ui/custom-components/MembersDisplay'
import OrganizersDisplay from 'ui/custom-components/OrganizersDisplay'
import EventEntry from 'ui/custom-components/EventEntry'
import GroupSelector from 'ui/custom-components/GroupSelector'
import Interests from 'ui/custom-components/Interests'

import Group from 'types/Group'
import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  navigation: any
  group: Group
}
export interface State {
  searchTerm?: string
}
export default class GroupDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {}

    this.addData = this.addData.bind(this)
    this.goBack = this.goBack.bind(this)
    this.searchGroup = this.searchGroup.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }
  
  searchGroup(searchTerm) {
    this.setState({ searchTerm })
  }

  addData() {
    this.props.navigation.navigate('AddData')
  }

  render() {
    const { props: { navigation, group, group: { id, name, city, state, members, organizers, about, events, interests } }, state: { searchTerm } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <HeaderSearchBar placeholder="Search Group" searchTerm={searchTerm} onChangeText={this.searchGroup} />
          </Body>
          <Right />
        </Header>
        <Content>
          <GetImage imageId={id} size={300} fullscreen={true} />
          <Text style={styles.groupTitle}>{name}</Text>
          <Text style={styles.location}>{`${city}, ${state}`}</Text>

          <MembersDisplay members={members} screen="group" onPress={navigation.navigate('Members', { group })} />

          <OrganizersDisplay organizers={organizers} screen="group" onPress={navigation.navigate('Organizers', { group })} />

          <Text style={general.subHeader}>About This Group</Text>
          <Text style={styles.about}>{about}</Text>

          <Text style={general.subHeader}>Upcoming Events</Text>
          <ScrollView style={general.flexRow} horizontal={true} showsHorizontalScrollIndicator={false}>
            {events.slice(0,5).map((event: Event) => <EventEntry navigation={navigation} event={event} />)}
          </ScrollView>
          <Text style={styles.link} onPress={navigation.navigate('Events', { group })} >See all events</Text>

          <GroupSelector navigation={navigation} group={group} />

          <Text style={general.subHeader}>Related Topics</Text>
          <Interests interests={interests}/>
          {/* videos */}
          {/* photos */}
          {/* files */}
          {/* recommendations */}
          {/* filters */}
        </Content>
      </Container>
    )
  }
}
