import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, Input, Picker, View } from 'native-base'
import ProfilePic from 'ui/custom-components/ProfilePic'
import SelectLocation from 'ui/custom-components/SelectLocation'
import Interests from 'ui/custom-components/Interests'

import City from 'types/City'

import styles from './styles'
import general from 'theme/general'
import { PROFILE_PIC_SIZE } from 'theme/constants'

import { NAME_MIN_LENGTH, DESCRIPTION_MIN_LENGTH, NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from 'theme/constants'

export interface Props {
  navigation: any
  createGroup: () => void
  name: string
  about: string
  location: City
  interests: string[]
  profilePic: string
  updateValue: (key: string, value: string) => void
  refresh: () => void
}

class CreateGroup extends React.Component<Props> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.updateInterests = this.updateInterests.bind(this)
    this.goToUpdateInterests = this.goToUpdateInterests.bind(this)
    this.goToUpdateLocation = this.goToUpdateLocation.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }

  updateName(name: string) {
    this.props.updateValue('name', name)
  }

  updateDescription(about: string) {
    this.props.updateValue('about', about)
  }

  updateInterests(interest: string) {
    this.props.updateValue('interests', interest)
  }

  goToUpdateInterests() {
    this.props.navigation.navigate('UpdateInterests', { origin: 'createGroup', refresh: this.props.refresh })
  }

  goToUpdateLocation() {
    this.props.navigation.navigate('UpdateLocation', { origin: 'createGroup' })
  }

  render() {
    const { createGroup, profilePic, name, about, interests, location } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Create Group</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.centeredColumn}>
            <View style={general.smallTopMargin}/>
            <ProfilePic imageId={profilePic} star={true} size={PROFILE_PIC_SIZE}/>
            <Text style={styles.header}>Start a new Group</Text>
          </View>
          <View style={general.lightGrayDivider} />
          <Text style={styles.intro}>Give your group a name. Describe who should join and what you'll do.</Text>
          <Form>
            <Item style={styles.inputUnderline}>
              <Input
                style={styles.textInput}
                placeholder='Group Name'
                value={name}
                maxLength={NAME_MAX_LENGTH}
                onChangeText={this.updateName}
              />
            </Item>
            {name.length < NAME_MIN_LENGTH ? <Text style={styles.hintText}>{`Must be at least ${NAME_MIN_LENGTH} characters`}</Text> : null}

            <Item style={styles.inputUnderline}>
              <Input
                style={styles.textInput}
                placeholder='Description'
                value={about}
                maxLength={DESCRIPTION_MAX_LENGTH}
                onChangeText={this.updateDescription}
                multiline={true}
              />
            </Item>
            {about.length < DESCRIPTION_MIN_LENGTH ? <Text style={styles.hintText}>{`Must be at least ${DESCRIPTION_MIN_LENGTH} characters`}</Text> : null}

            <View style={[general.lightGrayDivider, general.mediumTopMargin]} />
            <Text style={styles.subHeader} onPress={this.goToUpdateLocation}>Location</Text>
            <View style={general.smallHMargin}>
              <SelectLocation location={location} onPress={this.goToUpdateLocation}/>
            </View>
            <View style={general.lightGrayDivider} />

            <Text style={styles.subHeader} onPress={this.goToUpdateInterests}>Interests</Text>
            <Item style={styles.inputUnderline}>
              {interests.slice().length > 0 ? <Interests onPress={this.goToUpdateInterests} interests={interests} />
              : <Text style={styles.lightText} onPress={this.goToUpdateInterests}>Select a few interests</Text>}
            </Item>
            <Button onPress={createGroup} rounded primary style={styles.button}>
              <Text>Create Group</Text>
            </Button>
          </Form>
          <View style={general.largeTopMargin}/>
        </Content>
      </Container>
    )
  }
}

export default CreateGroup
