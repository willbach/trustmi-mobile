import * as React from "react"
import { Image, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, View, Item, Form, Input, Picker, Toast } from "native-base"
import { ProfilePic } from 'ui/custom-components'
import { PROFILE_PIC_SIZE, USER_PURPOSES, USER_TYPES } from 'theme/constants'

import styles from "./styles"
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

const informationCategories = [
  { icon: "md-school", title: 'Educational' },
  { icon: "ios-briefcase", title: 'Professional' },
  { icon: "ios-card", title: 'Financial' },
  { icon: "ios-wine", title: 'Lifestyle' },
  { icon: "ios-body", title: 'Physical' },
  { icon: "ios-star", title: 'Veteran' },
]

export interface Props {
  userStore: any
}
export interface State {
  linkedinUrl: string
  type: number
  purpose: number
  intro: string
}
class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    const { userStore: { linkedinUrl, userType, userPurpose, userIntro } } = props
    console.log({ linkedinUrl, userType, userPurpose, userIntro })

    this.state = {
      linkedinUrl: linkedinUrl || 'https://linkedin.com/in/',
      type: USER_TYPES.indexOf(userType),
      purpose: USER_PURPOSES.indexOf(userPurpose),
      intro: userIntro,
    }
  }

  async setUserType(value: number) {
    try {
      await this.props.userStore.updateUser({ userType: USER_TYPES[value] })
      this.setState({ type: value })
    } catch (error) {
      console.log('ERROR SETTING USER TYPE:', error)
    }
  }

  async setUserPurpose(value: number) {
    try {
      await this.props.userStore.updateUser({ userPurpose: USER_PURPOSES[value] })
      this.setState({ purpose: value })
    } catch (error) {
      console.log('ERROR SETTING USER PURPOSE:', error)
    }
  }

  setUserIntro(intro: string) {
    this.setState({ intro })
  }

  async saveUserIntro() {
    try {
      await this.props.userStore.updateUser({ userIntro: this.state.intro })
    } catch (error) {
      console.log('ERROR SETTING USER INTRO:', error)
    }
  }

  setLinkedinUrl(linkedinUrl: string) {
    this.setState({ linkedinUrl })
  }

  async saveLinkedinUrl() {
    try {
      await this.props.userStore.updateUser({ linkedinUrl: this.state.linkedinUrl })
    } catch (error) {
      console.log('ERROR SETTING USER INTRO:', error)
      Toast.show({ type: 'danger', text: 'There was an error pulling your LinkedIn data. Please ensure your first name and last name in LinkedIn match your photo ID, then try again', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
    }
  }

  render() {
    const { props: { userStore, userStore: { interests, updateUser } }, state: { linkedinUrl, type, purpose, intro } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={openDrawer} />
            </Button>
          </Left>
          <Body>
            <View style={general.flexRow}>
              <Image source={require('images/logo-transparent-small.png')} style={styles.headerLogo} />
              <Image source={require('images/logo-text-white.png')} style={styles.headerText} />
            </View>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            {/* Allow user to edit this stuff */}
            {/* <View style={styles.profileInfo}>
              <View style={styles.picAndName}>
                <ProfilePic imageId={pic} size={PROFILE_PIC_SIZE}/>
                <View style={styles.nameCityState}>
                  <Text style={styles.location}>{`${city}, ${state}`}</Text>
                </View>
              </View>
              {title && companyName && <View style={[general.centeredColumn, general.smallBottomMargin]}>
                <Text style={styles.work}>{title}</Text>
                <Text style={styles.work}>{`at ${companyName}`}</Text>
              </View>}
              {universityName && <View style={general.flexRow}>
                <Text style={styles.university}>{`${universityName} ${universityGradYear}`}</Text>
              </View>}
              {annualIncome && <View style={general.flexRow}>
                <Text style={styles.income}>{`Annual Income: $${annualIncome}`}</Text>
              </View>}
            </View> */}
            <Text style={general.h3}>Personal LinkedIn URL:</Text>
            <Item>
              <Input value={linkedinUrl} onChangeText={this.setLinkedinUrl.bind(this)} />
            </Item>
            <View padder style={general.smallHMargin}><Button onPress={this.saveLinkedinUrl.bind(this)}><Text>Get Data From LinkedIn</Text></Button></View>

            <Text style={general.h3}>Your Introduction</Text>
            <Item>
              <Input placeholder='Do you have a company? An idea? What do you bring to a startup? What are you looking for in a co-founder?' value={intro}
                onBlur={() => null} maxLength={300} onChangeText={this.setUserIntro.bind(this)} multiline={true} style={styles.intro}>
              </Input>
            </Item>
            <View padder style={general.smallHMargin}><Button onPress={this.saveUserIntro.bind(this)}><Text>Update Intro</Text></Button></View>

            <Text style={general.h3}>What best describes you?</Text>
            <Picker mode="dropdown" iosHeader="What best describes you?" iosIcon={<Icon name="arrow-down" />}
              style={styles.picker} selectedValue={type} onValueChange={this.setUserType.bind(this)}>

              {USER_TYPES.map((type, ind) => <Picker.Item label={type} value={ind} key={ind} />)}
            </Picker>
            <Text style={general.h3}>What are you looking for?</Text>
            <Picker mode="dropdown" iosHeader="What are you looking for?" iosIcon={<Icon name="arrow-down" />}
              style={styles.picker} selectedValue={purpose} onValueChange={this.setUserPurpose.bind(this)}>

              {USER_PURPOSES.map((type, ind) => <Picker.Item label={type} value={ind} key={ind}/>)}
            </Picker>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default Profile
