import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, Input, View, Row } from 'native-base'
import SelectLocation from 'ui/custom-components/SelectLocation'
import Interests from 'ui/custom-components/Interests'

import Group from 'types/Group'

import styles from './styles'
import general from 'theme/general'
import { PROFILE_PIC_SIZE } from 'theme/constants'

import { NAME_MIN_LENGTH, DESCRIPTION_MIN_LENGTH, NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from 'theme/constants'
import DateTimePicker from 'ui/custom-components/DateTimePicker';

export interface Props {
  navigation: any
  createEvent: (isDraft: boolean) => void
  group: Group
  title: string
  about: string
  directionsParking: string
  street: string
  city: string
  state: string
  country: string
  startTime: string
  endTime: string
  interests: string[]
  documents: string[]
  updateValue: (key: string, value: string) => void
  refresh: () => void
}
export interface State {}
class CreateEvent extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.updateInterests = this.updateInterests.bind(this)
    this.goToUpdateInterests = this.goToUpdateInterests.bind(this)
    this.updateStreet = this.updateStreet.bind(this)
    this.updateCity = this.updateCity.bind(this)
    this.updateState = this.updateState.bind(this)
    this.updateCountry = this.updateCountry.bind(this)
    this.updateDirections = this.updateDirections.bind(this)
    this.updateStartTime = this.updateStartTime.bind(this)
    this.updateEndTime = this.updateEndTime.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }

  updateTitle(title: string) {
    this.props.updateValue('title', title)
  }

  updateDescription(about: string) {
    this.props.updateValue('about', about)
  }

  updateStreet(value: string) {
    this.props.updateValue('street', value)
  }

  updateCity(value: string) {
    this.props.updateValue('city', value)
  }

  updateState(value: string) {
    this.props.updateValue('state', value)
  }

  updateCountry(value: string) {
    this.props.updateValue('country', value)
  }

  updateStartTime(startTime: Date) {
    this.props.updateValue('startTime', startTime.toString())
  }

  updateEndTime(endTime: Date) {
    this.props.updateValue('endTime', endTime.toString())
  }

  updateDirections(value: string) {
    this.props.updateValue('directionsParking', value)
  }

  updateInterests(interest: string) {
    this.props.updateValue('interests', interest)
  }

  goToUpdateInterests() {
    this.props.navigation.navigate('UpdateInterests', { origin: 'createGroup', refresh: this.props.refresh })
  }

  render() {
    const { navigation, createEvent, group, title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Create Event</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={styles.intro}>Title your event. Provide details, location, directions, parking information, guidelines, etc.</Text>
          <Form>
            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Event Title' value={title} maxLength={NAME_MAX_LENGTH} onChangeText={this.updateTitle} />
            </Item>
            {title.length < NAME_MIN_LENGTH ? <Text style={styles.hintText}>{`Must be at least ${NAME_MIN_LENGTH} characters`}</Text> : null}

            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Description' value={about} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateDescription} multiline={true} />
            </Item>
            {about.length < DESCRIPTION_MIN_LENGTH ? <Text style={styles.hintText}>{`Must be at least ${DESCRIPTION_MIN_LENGTH} characters`}</Text> : null}
            <View style={[general.lightGrayDivider, general.mediumTopMargin]} />

            <View style={general.flexRow}>
              <View style={styles.dateColumn}>
                <Text style={styles.h2}>Start Time</Text>
                <DateTimePicker onDateChange={this.updateStartTime} containerStyle={styles.datePicker} />
              </View>
              <View style={styles.dateColumn}>
                <Text style={styles.h2}>End Time</Text>
                <DateTimePicker onDateChange={this.updateEndTime} containerStyle={styles.datePicker} />
              </View>
            </View>

            <View style={general.lightGrayDivider} />
            <Text style={styles.h2}>Event Location</Text>

            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Street Address' value={street} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateStreet} />
            </Item>
            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='City' value={city} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateCity} />
            </Item>
            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='State' value={state} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateState} />
            </Item>
            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Country' value={country} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateCountry} />
            </Item>

            <Text style={styles.h2}>Event Directions</Text>

            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Directions / Parking Info' value={directionsParking} maxLength={DESCRIPTION_MAX_LENGTH} onChangeText={this.updateDirections} multiline={true} />
            </Item>

            <Text style={styles.h2} onPress={this.goToUpdateInterests}>Interests</Text>
            <Item style={styles.inputUnderline}>
              {interests.slice().length > 0 ? <Interests onPress={this.goToUpdateInterests} interests={interests} />
              : <Text style={styles.lightText} onPress={this.goToUpdateInterests}>Select a few interests</Text>}
            </Item>
            <Button onPress={() => createEvent(false)} rounded primary style={styles.button}>
              <Text>Create Event</Text>
            </Button>
            <Button onPress={() => createEvent(true)} rounded primary style={styles.button}>
              <Text>Save As Draft</Text>
            </Button>
          </Form>
          <View style={general.largeTopMargin}/>
        </Content>
      </Container>
    )
  }
}

export default CreateEvent
