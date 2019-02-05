import * as React from "react"
import { Image, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, View } from "native-base"
import Square from 'ui/custom-components/Square'
import ProfileCompletionBar from 'ui/custom-components/ProfileCompletionBar'
import ProfilePic from 'ui/custom-components/ProfilePic'
import Interests from 'ui/custom-components/Interests'
import { PROFILE_PIC_SIZE } from 'theme/constants'

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
  navigation: any
  profileData: any
  interests: string[]
  getAge: () => number
}
export interface State {}
class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.changeUpdateInterests = this.changeUpdateInterests.bind(this)
    this.addData = this.addData.bind(this)
  }

  changeUpdateInterests() {
    this.props.navigation.navigate('UpdateInterests')
  }

  addData() {
    this.props.navigation.navigate('AddData')
  }

  renderProfileInfo() {
    const { profileData, getAge } = this.props

    const currentJobTitle = 'Lead Developer'
    const currentCompany = 'The Pond'
    const university = 'University of Virginia'
    const universityGraduationYear = '2010'
    const currentAnnualIncome = '60,000'
    
    //at some point will add logic to ask users to update the information
    return <View style={styles.profileInfo}>
      <View style={styles.picAndName}>
        <ProfilePic imageId={profileData.pic} size={PROFILE_PIC_SIZE}/>
        <View style={styles.nameCityState}>
          <Text style={styles.name}>{`${profileData.first} ${profileData.last}`}</Text>
          <Text style={styles.location}>{`${profileData.city}, ${profileData.state}`}</Text>
          <Text style={styles.location}>{`${getAge()} years old`}</Text>
        </View>
      </View>
      <View style={general.flexRow}>
        <Text style={styles.work}>{`${currentJobTitle} at ${currentCompany}`}</Text>
      </View>
      <View style={general.flexRow}>
        <Text style={styles.university}>{`${university}, ${universityGraduationYear}`}</Text>
      </View>
      <View style={general.flexRow}>
        <Text style={styles.income}>{`Annual Income: $${currentAnnualIncome}`}</Text>
      </View>
    </View>
  }

  render() {
    const { interests } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
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
          {this.renderProfileInfo()}
          <View style={[general.flexRowWrap, styles.dataSection]}>
            {informationCategories.map((ele: any, ind: number) => {
              return <Square key={ind} onPress={() => this.props.navigation.navigate("InformationList", { category: ele.title })} squaresPerRow={2} containerStyle={styles.squareSideBorder(ind)} >
                <View style={general.flexRow}>
                  <Icon name={ele.icon} />
                  <Text style={styles.categoryTitle}>{ele.title}</Text>
                </View>
              </Square>
            })}
          </View>
          <View style={[general.flexRow, styles.interestsHeader]}>
            <View style={general.flex}/>
            <Text style={[styles.interestsTitle, general.flex]}>Interests</Text>
            <TouchableHighlight onPress={this.changeUpdateInterests} style={general.flex} underlayColor={commonColor.touchableUnderlay}>
              <View style={general.flexRowEnd}>
                <Text style={styles.updateUpdateInterests}>Update</Text>
                <Icon style={styles.arrowIcon} name="ios-arrow-forward" />
              </View>
            </TouchableHighlight>
          </View>
          <Interests onPress={this.changeUpdateInterests} interests={interests} />
        </Content>
      </Container>
    )
  }
}

export default Profile
