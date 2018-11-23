import * as React from "react"
import { View, Image, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base"
import Tile from 'ui/components/Tile'
import ProfileCompletionBar from 'ui/components/ProfileCompletionBar'

import styles from "./styles"
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

export interface Props {
  navigation: any
  informationCategories: any
  profileData: any
  interests: string[]
  profileCompletionPercentage: number
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
    const { profileData, profileCompletionPercentage } = this.props
    const profilePic = profileData.pic ? <Image source={{uri: profileData.pic}} style={styles.profilePic} /> : <Icon name="ios-contact" style={styles.avatarIcon}/>
    
    //at some point will add logic to ask users to update the information
    return <View style={styles.profileInfo}>
      <ProfileCompletionBar percentage={profileCompletionPercentage} onPress={this.addData} style={styles.completionBar}/>
      {profilePic}
      <View style={styles.nameCityState}>
        <Text style={styles.name}>{`${profileData.first} ${profileData.last}`}</Text>
        <Text style={styles.location}>{`${profileData.city}, ${profileData.state}`}</Text>
      </View>
    </View>
  }

  render() {
    const { informationCategories, interests } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.renderProfileInfo()}
          <View style={general.flexRowWrap}>
            {informationCategories.map((ele: any, ind: number) => <Tile key={ind} onPress={() => this.props.navigation.navigate("InformationList", { category: ele.footerText })} tilesPerRow={3} image={ele.image} footerText={ele.footerText} />)}
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
          <TouchableHighlight onPress={this.changeUpdateInterests} underlayColor={commonColor.touchableUnderlay}>
            <View style={general.flexRowWrap}>
              {interests.map((ele: string, ind: number) => (<Text key={ind} style={styles.interest}>{ele}</Text>))}
            </View>
          </TouchableHighlight>
        </Content>
      </Container>
    )
  }
}

export default Profile