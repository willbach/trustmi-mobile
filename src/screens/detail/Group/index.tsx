import * as React from 'react'
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, View } from 'native-base'
import { ScrollView } from 'react-native'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'
import GetImage from 'ui/custom-components/GetImage'
import MembersDisplay from 'ui/custom-components/MembersDisplay'
import OrganizersDisplay from 'ui/custom-components/OrganizersDisplay'
import EventEntry from 'ui/custom-components/EventEntry'
import GroupSelector from 'ui/custom-components/GroupSelector'
import Interests from 'ui/custom-components/Interests'
import { formatMemberCount } from 'utils/format'

import Group from 'types/Group'
import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  startDiscussion: (message: string) => void
  userId: string
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
    const { props: { startDiscussion, userId, navigation, group, group: { id, name, city, state, members, organizers, about, events, interests } }, state: { searchTerm } } = this

    if (!group) {
      return <View/>
    }

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
          <View style={general.centeredColumn}>
            <GetImage imageId={id} size={300} fullscreen={true} />
            <Text style={styles.groupTitle}>{name}</Text>
            <Text style={styles.location}>{`${city}, ${state}`}</Text>

            <MembersDisplay members={members} screen="group" onPress={() => navigation.navigate('Members', { members, groupId: id, groupName: name })}>
              <Text>{`Closed Group · ${formatMemberCount(members.length)}`}</Text>
            </MembersDisplay>

            <OrganizersDisplay organizers={organizers} screen="group" onPress={() => navigation.navigate('Members', { members: organizers, groupId: id, groupName: name })} />
          </View>

          <Text style={general.subHeader}>About This Group</Text>
          {about.split('\\n').map((text: string, ind: number) => <Text key={ind} style={styles.about}>{text}</Text>)}


          <View>
            <Text style={general.subHeader}>Upcoming Events</Text>
            {group.isOrganizer(userId) && <Text style={styles.createEvent} onPress={() => this.props.navigation.navigate('CreateEvent', { group })}>+ create new event</Text>}
          </View>
          <ScrollView style={general.flexRow} horizontal={true} showsHorizontalScrollIndicator={false}>
            {events.slice(0,5).map((event: Event, ind: number) => <EventEntry key={ind} onPress={() => navigation.navigate('Event', { eventId: event.id })} event={event} />)}
          </ScrollView>
          <Text style={styles.link} onPress={() => navigation.navigate('Events', { group })} >See all events</Text>

          <GroupSelector startDiscussion={startDiscussion} userId={userId} navigation={navigation} group={group} />

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
