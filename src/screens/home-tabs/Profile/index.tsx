import * as React from "react"
import { Image, Linking } from 'react-native'
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, View, Item, Form, Input, Toast } from "native-base"
import { EditButton, ProfilePic, ProfileDataRow } from 'ui/custom-components'
import { PROFILE_PIC_SIZE } from 'theme/constants'
import { getDescriptionMessage } from 'utils/format'

import FAIcon from 'react-native-vector-icons/FontAwesome'

import styles from "./styles"
import general from 'theme/general'

const informationCategories = [
  { icon: "md-school", title: 'Educational' },
  { icon: "ios-briefcase", title: 'Professional' },
  { icon: "ios-card", title: 'Financial' },
  { icon: "ios-wine", title: 'Lifestyle' },
  { icon: "ios-body", title: 'Physical' },
  { icon: "ios-star", title: 'Veteran' },
]

export interface Props {
  editProfile: () => void
  navigation: any
  updateUser: any
  id: string
  first: string
  last: string
  city: string
  state: string
  linkedinUrl: string
  title: string
  companyName: string
  userPurpose: string
  userType: string
  userIntro: string
  skills: any[]
  certifications: any[]
  positions: any[]
  financials: any[]
  tests: any[]
  schools: any[]
}
export interface State {
  newLinkedinUrl?: string
}

class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    const { linkedinUrl, userType, userPurpose } = props

    this.state = {
      newLinkedinUrl: linkedinUrl,
    }
  }

  setLinkedinUrl(newLinkedinUrl: string) {
    this.setState({ newLinkedinUrl })
  }

  async saveLinkedinUrl() {
    try {
      await this.props.updateUser({ linkedinUrl: this.state.newLinkedinUrl })
    } catch (error) {
      console.log('ERROR SETTING USER INTRO:', error)
      Toast.show({ type: 'danger', text: 'There was an error pulling your LinkedIn data. Please ensure your first name and last name in LinkedIn match your photo ID, then try again', duration: 3000, position: 'bottom', textStyle: { textAlign: 'center' } })
    }
  }

  render() {
    const { props: { navigation, editProfile, id, first, last, city, state, linkedinUrl, title, companyName, userPurpose, userType, userIntro, 
      skills, certifications, positions, financials, tests, schools }, state: { newLinkedinUrl } } = this

      console.log('FINANCIALS', financials)

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
          {!linkedinUrl && <Form>
            <Text style={general.h3}>Populate Your Profile Using LinkedIn:</Text>
            <Item>
              <Input placeholder="https://linkedin.com/in/your_name_here" value={newLinkedinUrl} onChangeText={this.setLinkedinUrl.bind(this)} onFocus={() => this.setState({ newLinkedinUrl: "https://linkedin.com/in/" })} />
            </Item>
            <View padder style={general.smallHMargin}><Button onPress={this.saveLinkedinUrl.bind(this)}><Text>Get Data From LinkedIn</Text></Button></View>
          </Form>}
          <View style={styles.profileInfo}>
            <View style={[general.centeredColumn, styles.picAndName]}>
              <EditButton containerStyle={styles.editButton} style={styles.editIcon} onPress={editProfile} />
              <ProfilePic imageId={id} size={PROFILE_PIC_SIZE}/>
              <Text style={styles.name}>{`${first} ${last}`}</Text>

              {title && companyName && <View style={[general.centeredColumn, general.tinyTopMargin]}>
                <Text style={styles.work}>{title}</Text>
                <Text style={styles.work}>{`at ${companyName}`}</Text>
              </View>}

              <View style={general.flexRowCenter}>
                <Icon name="ios-pin" style={styles.locationIcon} />
                <Text style={styles.location}>{`${city}, ${state}`}</Text>
              </View>
              <Image source={require('images/water.jpeg')} style={styles.waterBackground} />
            </View>

            <View style={[general.row, general.centeredColumn, styles.userType]}>
              <EditButton containerStyle={styles.editButton} style={styles.editIcon} onPress={editProfile} />
              <Text style={general.h3}>{getDescriptionMessage(userType)}</Text>
              <Text style={styles.userPurpose}>{userType}</Text>

              <Text style={general.h3}>I am looking for a</Text>
              <Text style={styles.userPurpose}>{userPurpose}</Text>
            </View>

            <View style={[general.row, styles.introContainer]}>
              <FAIcon name="quote-left" style={styles.openQuote} />
              <FAIcon name="quote-right" style={styles.closeQuote} />
              <Text style={styles.intro}>{userIntro}</Text>
            </View>

            <ProfileDataRow icon="ios-ribbon" title="Skills & Certifications" addText="Skill or Cert" navigation={navigation}>
              {certifications.map((certification, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text></Text>
                </View>)}
              {skills.map((skill, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text></Text>
                </View>)}
            </ProfileDataRow>

            <ProfileDataRow icon="ios-copy" title="Previous Companies" addText="Company" navigation={navigation}>
              {positions.map((position, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text style={styles.dataItem} key={ind}>{position.company}    {position.verified ? <Icon name="md-checkmark-circle-outline" style={styles.verifiedIcon} /> : <Text style={styles.smallLink} onPress={() => null}>verify</Text> } </Text>
                  <Text>{position.title}</Text>
                  <Text>{position.duration}</Text>
                </View>)}
            </ProfileDataRow>

            <ProfileDataRow icon="ios-card" title="Financial Info" addText="Financial Info" navigation={navigation}>
              {financials.map((financial, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text style={styles.dataItem}>{`${financial.name} - ${financial.value}`}    <Icon name="md-checkmark-circle-outline" style={styles.verifiedIcon} /></Text>
                </View>)}
            </ProfileDataRow>

            <ProfileDataRow icon="ios-clipboard" title="Test Scores" addText="Test Score" navigation={navigation}>
              {tests.map((test, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text style={styles.dataItem} key={ind}>{`${test.name} - ${test.score}`}   <Icon name="md-checkmark-circle-outline" style={styles.verifiedIcon} /></Text>
                </View>)}
            </ProfileDataRow>
            
            <ProfileDataRow icon="ios-school" title="Education" addText="School" navigation={navigation}>
              {schools.map((school, ind) => <View style={[styles.entry, general.flexColumn]} key={ind}>
                  <Text style={styles.dataItem} key={ind}>{`${school.name} - ${school.gradYear}`}    {school.verified ? <Icon name="md-checkmark-circle-outline" style={styles.verifiedIcon} /> : <Text style={styles.smallLink} onPress={() => null}>verify</Text> }</Text>
                  {!!school.degree && <Text>{`${school.degree} ${school.field ? 'in' : ''} ${school.field ? school.field : ''}`}</Text>}
                  {!!school.gpa && <Text>{`GPA - ${school.gpa}`}</Text>}
                </View>)}
            </ProfileDataRow>

            <ProfileDataRow icon="ios-people" title="Social Media" addText="Social Media" navigation={navigation}>
              <View style={[styles.entry, general.flexColumn]}>
                {!!linkedinUrl && <Text style={styles.dataItem}>LinkedIn: <Text style={styles.link} onPress={() => Linking.openURL(linkedinUrl)}>{linkedinUrl}</Text></Text>}
              </View>
            </ProfileDataRow>
          </View>
        </Content>
      </Container>
    )
  }
}

{/* <View style={[general.flexRowWrap, styles.dataSection]}>
            {informationCategories.map((ele: any, ind: number) => {
              return <Square key={ind} onPress={() => this.props.navigation.navigate("InformationList", { category: ele.title })} squaresPerRow={2} containerStyle={styles.squareSideBorder(ind)} >
                <View style={general.flexRow}>
                  <Icon name={ele.icon} />
                  <Text style={styles.categoryTitle}>{ele.title}</Text>
                </View>
              </Square>
            })}
          </View> */}
          {/* <View style={[general.flexRow, styles.interestsHeader]}>
            <View style={general.flex}/>
            <Text style={[styles.interestsTitle, general.flex]}>Interests</Text>
            <TouchableHighlight onPress={this.changeUpdateInterests} style={general.flex} underlayColor={commonColor.touchableUnderlay}>
              <View style={general.flexRowEnd}>
                <Text style={styles.updateUpdateInterests}>Update</Text>
                <Icon style={styles.arrowIcon} name="ios-arrow-forward" />
              </View>
            </TouchableHighlight>
          </View>
          <Interests onPress={this.changeUpdateInterests} interests={interests} /> */}

export default Profile
