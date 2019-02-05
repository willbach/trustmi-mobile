import * as React from 'react'
import { View, TouchableHighlight, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Input, Item } from 'native-base'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import moment from 'moment'
import { formatEventTime } from 'utils/format'

import GetImage from 'ui/custom-components/GetImage'
import BlurModal from 'ui/custom-components/BlurModal'
import HeaderSearchBar from 'ui/custom-components/HeaderSearchBar'

import Group from 'types/Group'
import Event from 'types/Event'
import AvailableInterests from 'types/AvailableInterests'

import styles from './styles'
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

export interface Props {
  navigation: any
  groups: Group[]
  availableGroups: Group[]
  interests: string[]
  availableInterests: AvailableInterests
  location: string
  eventsByInterest: any
}

export interface State {
  filteredGroups: Group[]
  location: string
  date: string
  searchTerm?: string
  calendarVisible: boolean
}

class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    const today = new Date()
    
    this.state = {
      filteredGroups: [],
      location: props.location,
      date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
      calendarVisible: false,
    }

    this.changeLocation = this.changeLocation.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.setDate = this.setDate.bind(this)
    this.closeCalendar = this.closeCalendar.bind(this)
    this.renderEventsByInterest = this.renderEventsByInterest.bind(this)
    this.renderInterestTile = this.renderInterestTile.bind(this)
    this.filterAvailableGroups = this.filterAvailableGroups.bind(this)
  }

  filterAvailableGroups(searchTerm?: string) {
    if (!!searchTerm) {
      this.setState({ filteredGroups: this.props.availableGroups.filter((group: Group) => group.name.toLocaleLowerCase().includes(searchTerm)) })
    }
  }

  changeLocation() {
    
  }

  changeDate() {
    this.setState({ calendarVisible: true })
  }

  closeCalendar() {
    this.setState({ calendarVisible: false })
  }

  setDate(date: any) {
    this.setState({ date: moment(date.dateString).format('M/D/YYYY') })
    this.closeCalendar()
  }

  renderEventsByInterest(interest: string, ind: number) {
    return (<View key={ind}>
      <View style={[general.betweenRow, general.standardHMargin]}>
        <Text onPress={() => this.props.navigation.navigate('Interest', { interest })} style={styles.interestHeader}>{interest}</Text>
        <Text onPress={() => this.props.navigation.navigate('Interest', { interest })} style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView style={[general.flexRow, general.standardLMargin, general.tinyTopMargin, general.mediumBottomMargin]} horizontal={true} showsHorizontalScrollIndicator={false}>
        {!!this.props && !!this.props.eventsByInterest && !!this.props.eventsByInterest[interest] && this.props.eventsByInterest[interest].slice(0, 6).map((event: Event, ind: number) => (
          <TouchableHighlight key={ind} onPress={() => this.props.navigation.navigate('Event', { event })} underlayColor={commonColor.touchableUnderlay}>
            <View style={[general.endColumn, styles.event]}>
              <View style={styles.eventImage}></View>
              <Text style={styles.eventText}>{event.title}</Text>
              <Text style={styles.eventText}>{event.location}</Text>
              <Text style={styles.eventText}>{formatEventTime(event.startTime)}</Text>
            </View>
          </TouchableHighlight>
        ))}
        <Icon name="ios-arrow-dropright-circle" style={styles.seeMoreIcon}/>
      </ScrollView>
    </View>)
  }

  renderInterestTile(interest: string, ind: number) {
    return (<TouchableHighlight key={ind} onPress={() => this.props.navigation.navigate('Interest', { interest })} underlayColor={commonColor.touchableUnderlay}>
      <View style={[general.flexColumn, styles.interestCategory]}>
        <GetImage imageId={interest} style={styles.interestImage} size={(width - 45)/2} />
        <Text style={styles.interestHeader}>{interest}</Text>
      </View>
    </TouchableHighlight>)
  }

  render() {
    const { searchTerm, location, date, calendarVisible } = this.state
    const { interests, availableInterests } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <HeaderSearchBar placeholder="Search Events and Groups" searchTerm={searchTerm} onChangeText={this.filterAvailableGroups} />
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.standardHMargin}>
            {/* <View style={[general.flexRow, general.smallTopMargin]}>
              <Text onPress={() => null} style={styles.miniHeader}>Find Events Near Me</Text>
              <Icon name="ios-arrow-forward" style={styles.arrowForward}/>
            </View> */}
            <Text style={[general.smallTopMargin, styles.miniHeader]}>Filter Events</Text>
            <View style={general.flexRowWrapStart}>
              <Text onPress={this.changeLocation} style={styles.interestFilter}>{location}</Text>
              <Text onPress={this.changeDate} style={styles.interestFilter}>{date}</Text>
            </View>
          </View>
          {/* TODO: add a main image(?) */}
          <Text style={general.subHeader}>Recommended Events</Text>
          {interests.map(this.renderEventsByInterest)}
          <Text style={general.subHeader}>Browse Events by Category</Text>
          <View style={[general.flexRowWrapBetween, general.standardHMargin]}>
            {Object.keys(availableInterests).map(this.renderInterestTile)}
          </View>

          <BlurModal visible={calendarVisible} onRequestClose={this.closeCalendar} transparent blurType="light" blurAmount={10}>
            <View style={[general.centeredColumn, styles.modalBody]}>
              <Calendar minDate={new Date()} onDayPress={this.setDate} />
              <Button style={[styles.selectButton, general.centeredColumn]} onPress={this.closeCalendar}><Text>Cancel</Text></Button>
            </View>
          </BlurModal>
        </Content>
      </Container>
    )
  }
}

export default Search
