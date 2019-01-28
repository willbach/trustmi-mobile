import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'
import GetImage from 'ui/custom-components/GetImage'
import MembersDisplay from 'ui/custom-components/MembersDisplay'
import OrganizersDisplay from 'ui/custom-components/OrganizersDisplay'
import Interests from 'ui/custom-components/Interests'
import { formatMemberCount } from 'utils/format'

import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  userId: string
  navigation: any
  event: Event
}
export interface State {
  
}

class EventDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }

  render() {
    const { props: { userId, navigation, event, event: { id, groupId, title, about, street, city, state, location, interests, attendees } } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <Title>Event</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.centeredColumn}>
            <GetImage imageId={id} size={300} fullscreen={true} />
            <Text style={styles.groupTitle}>{title}</Text>
            <Text style={styles.location}>{`${city}, ${state}`}</Text>

            <MembersDisplay members={attendees} screen="group" onPress={() => navigation.navigate('Members', { groupId })}>
              <Text>{`Closed Group · ${formatMemberCount(attendees.length)}`}</Text>
            </MembersDisplay>

            {/* <OrganizersDisplay organizers={organizers} screen="group" onPress={() => navigation.navigate('Organizers', { group })} /> */}
          </View>

          <Text style={general.subHeader}>About This Group</Text>
          {about.split('\\n').map((text: string, ind: number) => <Text key={ind} style={styles.about}>{text}</Text>)}

          <Text style={general.subHeader}>Related Topics</Text>
          <Interests interests={interests}/>
        </Content>
      </Container>
    )
  }
}

export default EventDetail
