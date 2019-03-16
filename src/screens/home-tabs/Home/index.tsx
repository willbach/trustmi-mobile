import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import AddDataLink from 'ui/custom-components/AddDataLink'
import EventCalendar from 'ui/custom-components/EventCalendar'
import GroupTile from 'ui/custom-components/GroupTile'
import ProfileCompletionBar from 'ui/custom-components/ProfileCompletionBar'

import Group from 'types/Group'
import Event from 'types/Event'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  navigation: any
  groups: Group[]
  availableGroups: Group[]
  events: Event[]
  profileCompletionPercentage: number
}
export interface State {}
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.renderGroup = this.renderGroup.bind(this)
    this.addData = this.addData.bind(this)
  }

  addData() {
    this.props.navigation.navigate('AddData')
  }

  renderGroup(group: Group, ind: number, addIcon: boolean) {
    return <GroupTile group={group} onPress={() => this.props.navigation.navigate('Group', { groupId: group.id })} key={ind} addIcon={addIcon}/>
  }

  render() {
    const { groups, availableGroups, events, navigation, profileCompletionPercentage } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ProfileCompletionBar percentage={profileCompletionPercentage} onPress={this.addData}/>
          <AddDataLink onPress={this.addData} text="Connect more data to unlock additional groups" style={{marginLeft: 20}}/>

          <View>
            <Text style={general.h2}>Your Groups</Text>
            <Text style={styles.createGroup} onPress={() => this.props.navigation.navigate('CreateGroup')}>+ create new group</Text>
          </View>
          {groups.length ?
            <ScrollView style={[general.standardLMargin, general.flexRow]} horizontal={true} showsHorizontalScrollIndicator={false}>
              {groups.map((group: Group, ind: number) => this.renderGroup(group, ind, false))}
            </ScrollView> :
            <Text style={styles.noneMessage}>Join or create a group!</Text>
          }
          

          <Text style={[general.h2, {marginBottom: 5}]}>Recommended Groups</Text>
          <AddDataLink onPress={this.addData} text="Help us tailor your recommendations" style={{marginTop: -5}} />
          <View style={general.smallBottomMargin}/>
          <ScrollView style={[general.standardLMargin, general.flexRow]} horizontal={true} showsHorizontalScrollIndicator={false}>
            {availableGroups.map((group: Group, ind: number) => this.renderGroup(group, ind, true))}
          </ScrollView>

          <Text style={general.h2}>Your Calendar</Text>
          <EventCalendar navigation={navigation} events={events}/>
        </Content>
      </Container>
    )
  }
}

export default Home
