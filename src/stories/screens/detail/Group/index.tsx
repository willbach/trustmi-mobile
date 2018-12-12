import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import AddDataLink from 'ui/components/AddDataLink'
import EventCalendar from 'ui/components/EventCalendar'
import GroupTile from 'ui/components/GroupTile'

import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  navigation: any
  group: Group
}
export interface State {}
class GroupDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.renderGroup = this.renderGroup.bind(this)
    this.addData = this.addData.bind(this)
  }

  addData() {
    this.props.navigation.navigate('AddData')
  }

  renderGroup(group: Group, ind: number, addIcon: boolean) {
    return <GroupTile group={group} onPress={() => this.props.navigation.navigate('Group', { group })} key={ind} addIcon={addIcon}/>
  }

  render() {
    const { navigation, group } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Group</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <AddDataLink onPress={this.addData} text="Connect more data to unlock additional groups" style={{marginLeft: 20}}/>

          <View>
            <Text style={general.subHeader}>Your Groups</Text>{/* create new group */}
            <Text style={styles.createGroup} onPress={() => this.props.navigation.navigate('Group')}>+ create new group</Text>
          </View>

          <Text style={[general.subHeader, {marginBottom: 5}]}>Recommended Groups</Text>
          <AddDataLink onPress={this.addData} text="Help us tailor your recommendations" style={{marginTop: -5}} />
          <View style={general.smallBottomMargin}/>

          <Text style={general.subHeader}>Your Calendar</Text>
          <EventCalendar navigation={navigation} events={group.events}/>
        </Content>
      </Container>
    )
  }
}

export default GroupDetail
