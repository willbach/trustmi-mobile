import * as React from "react"
import { View, TouchableHighlight, Image, ScrollView } from "react-native"
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, Form, Input, Item } from "native-base"

import Group from 'types/Group'
import Event from 'types/Event'

import styles from "./styles"
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

export interface Props {
  navigation: any
  groups: Group[]
  availableGroups: Group[]
  interests: string[]
  availableInterests: string[]
  location: string
  eventsByInterest: any
}
export interface State {
  filteredGroups: Group[]
  location: string
  date: string
  searchTerm?: string
}
class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    const today = new Date()
    
    this.state = {
      filteredGroups: [],
      location: props.location,
      date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
    }

    this.changeLocation = this.changeLocation.bind(this)
    this.changeDates = this.changeDates.bind(this)
    this.renderEventsByInterest = this.renderEventsByInterest.bind(this)
    this.getInterestImage = this.getInterestImage.bind(this)
    this.renderInterestTile = this.renderInterestTile.bind(this)
    this.filterAvailableGroups = this.filterAvailableGroups.bind(this)
    this.getInterestImage = this.getInterestImage.bind(this)
  }

  filterAvailableGroups(searchTerm?: string) {
    if (!!searchTerm) {
      this.setState({ filteredGroups: this.props.availableGroups.filter((group: Group) => group.name.toLocaleLowerCase().includes(searchTerm)) })
    }
  }

  changeLocation() {

  }

  changeDates() {

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
              {/* <Image source={} style={styles.eventImage}/> */}
              <View style={styles.eventImage}></View>
              <Text style={styles.eventText}>{event.name}</Text>
              <Text style={styles.eventText}>{event.location}</Text>
              <Text style={styles.eventText}>{event.formatDateTime()}</Text>
            </View>
          </TouchableHighlight>
        ))}
        <Icon name="ios-arrow-dropright-circle" style={styles.seeMoreIcon}/>
      </ScrollView>
    </View>)
  }

  getInterestImage(interest: string) {
    // return <Image source={}/>
    return <View style={styles.interestImage}></View>
  }

  renderInterestTile(interest: string, ind: number) {
    return (<TouchableHighlight key={ind} onPress={() => this.props.navigation.navigate('Interest', { interest })} underlayColor={commonColor.touchableUnderlay}>
      <View style={[general.flexColumn, styles.interestCategory]}>
        {this.getInterestImage(interest)}
        <Text style={styles.interestHeader}>{interest}</Text>
      </View>
    </TouchableHighlight>)
  }

  render() {
    const { searchTerm, location, date } = this.state
    const { interests, availableInterests } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Icon active name='ios-search' />
              <Input placeholder='Search Events and Groups' value={searchTerm} onChangeText={this.filterAvailableGroups}/>
            </Item>
          </Form>
          <View style={general.standardHMargin}>
            <View style={[general.flexRow, general.smallTopMargin]}>
              <Text onPress={() => null} style={styles.miniHeader}>Find Events Near Me</Text>
              <Icon name="ios-arrow-forward" style={styles.arrowForward}/>
            </View>
            <Text style={[general.smallTopMargin, styles.miniHeader]}>Filter Events</Text>
            <View style={general.flexRowWrapStart}>
              <Text onPress={this.changeLocation} style={styles.interestFilter}>{location}</Text>
              <Text onPress={this.changeDates} style={styles.interestFilter}>{date}</Text>
            </View>
          </View>
          {/* TODO: add a main image(?) */}
          <Text style={general.subHeader}>Recommended Events</Text>
          {interests.map(this.renderEventsByInterest)}
          <Text style={general.subHeader}>Browse Events by Category</Text>
          <View style={[general.flexRowWrapBetween, general.standardHMargin]}>
            {availableInterests.map(this.renderInterestTile)}
          </View>
        </Content>
      </Container>
    )
  }
}

export default Search