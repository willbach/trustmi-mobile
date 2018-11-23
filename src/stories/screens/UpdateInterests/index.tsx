import * as React from 'react'
import { Platform, TouchableHighlight } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Left, Right, Form, Item, Input } from 'native-base'

import styles from './styles'
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

export interface Props {
  goBack: () => void
  addInterest: (interest: string) => void
  removeInterest: (interest: string) => void
  interests: string[]
  availableInterests: string[]
}

export interface State {
  filteredInterests: string[]
  searchTerm?: string
}

export default class UpdateInterests extends React.Component<Props, State> {
	constructor(props) {
    super(props)
    
    this.state = {
      filteredInterests: []
    }

    this.filterAvailableInterests = this.filterAvailableInterests.bind(this)
    this.renderInterest = this.renderInterest.bind(this)
    this.renderSelectedInterest = this.renderSelectedInterest.bind(this)
    this.renderFilteredInterest = this.renderFilteredInterest.bind(this)
  }

  componentWillMount() {
    this.filterAvailableInterests()
  }

  updateInterests(adding: boolean, interest: string) {
    if (adding) {
      this.props.addInterest(interest)
    } else {
      this.props.removeInterest(interest)
    }
    setTimeout(() => this.filterAvailableInterests(), 10)
  }

  filterAvailableInterests(searchTerm?: string) {
    const { interests, availableInterests } = this.props

    const unselectedInterests = availableInterests.filter((el: string) => !interests.includes(el))
    if (!!searchTerm) {
      this.setState({ filteredInterests: unselectedInterests.filter((el: string) => el.toLocaleLowerCase().includes(searchTerm)) })
    } else {
      this.setState({ filteredInterests: unselectedInterests })
    }
  }

  renderInterest(ind: number, add: boolean, interest: string) {
    return (<TouchableHighlight onPress={() => this.updateInterests(add, interest)} key={ind} underlayColor={commonColor.touchableUnderlay}>
      <Text style={styles.interest}>{interest}</Text>
    </TouchableHighlight>)
  }

  renderSelectedInterest(interest: string, ind: number) {
    return this.renderInterest(ind, false, interest)
  }

  renderFilteredInterest(interest: string, ind: number) {
    return this.renderInterest(ind, true, interest)
  }

	render() {
    const { filteredInterests, searchTerm } = this.state

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.props.goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Update Interests</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{}}>
            <Text style={general.subHeader}>Your Interests {<Text style={styles.subtext}>(Tap to Remove)</Text>}</Text>
            <View style={general.flexRowWrap}>
              {this.props.interests.map(this.renderSelectedInterest)}
            </View>

            <View style={general.largeTopMargin}/>
            <Text style={general.subHeader}>Add Interests {<Text style={styles.subtext}>(Tap to Add)</Text>}</Text>
            <Form>
              <Item>
                <Icon active name='ios-search' />
                <Input placeholder='Search Interests' value={searchTerm} onChangeText={this.filterAvailableInterests}/>
              </Item>
            </Form>
            <View style={general.smallTopMargin}/>
            <View style={general.flexRowWrap}>
              {filteredInterests.map(this.renderFilteredInterest)}
            </View>
            <View style={{paddingBottom: 20}}/>
          </View>
        </Content>
      </Container>
    )
	}
}
