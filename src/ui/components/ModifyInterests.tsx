import * as React from 'react'
import { TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { Text, View, Icon, Form, Item, Input } from 'native-base'
import ToggleRow from 'ui/components/ToggleRow'
import AvailableInterests from 'types/AvailableInterests'

import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

const { width } = Dimensions.get('window')
const styles: any = StyleSheet.create({
	updateUpdateInterests: {
		color: commonColor.brandPrimary,
		fontSize: 16,
	},
  interest: { paddingVertical: 3, paddingHorizontal: 6, margin: 5, borderRadius: 5, backgroundColor: commonColor.brandPrimary },
  interestIcon: { color: commonColor.white, fontSize: 18, marginRight: 4, marginTop: 1 },
  interestText: { color: commonColor.white, fontSize: 14, backgroundColor: commonColor.brandPrimary },
	filteredInterest: { width: (width - 40), borderBottomColor: commonColor.lightGray, borderBottomWidth: 1, borderTopColor: commonColor.lightGray, borderTopWidth: 1 },
	filteredInterestText: { fontSize: 20, paddingVertical: 8 },
	filteredInterestIcon: { color: commonColor.brandSecondary, fontSize: 30, marginTop: 7 },
	subtext: { color: commonColor.mediumGray, marginLeft: 5 },
})

export interface Props {
  addInterest: (interest: string) => void
  removeInterest: (interest: string) => void
  interests: string[]
  availableInterests: AvailableInterests
}

export interface State {
  filteredInterests: AvailableInterests
  searchTerm?: string
}

export default class ModifyInterests extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      filteredInterests: this.props.availableInterests
    }

    this.filterAvailableInterests = this.filterAvailableInterests.bind(this)
    this.renderInterest = this.renderInterest.bind(this)
    this.renderSelectedInterest = this.renderSelectedInterest.bind(this)
    this.renderFilteredInterest = this.renderFilteredInterest.bind(this)
  }

  updateInterests(adding: boolean, interest: string) {
    if (adding) {
      this.props.addInterest(interest)
    } else {
      this.props.removeInterest(interest)
    }
    setTimeout(() => this.filterAvailableInterests(this.state.searchTerm), 1)
  }

  filterAvailableInterests(searchTerm?: string) {
    const { props: { interests, availableInterests } } = this

    const unselectedInterests = availableInterests.filter((el: string) => !interests.includes(el))

    if (!!searchTerm) {
      this.setState({ filteredInterests: unselectedInterests.filter((el: string) => el.toLocaleLowerCase().includes(searchTerm)), searchTerm })
    } else {
      this.setState({ filteredInterests: unselectedInterests, searchTerm })
    }
  }

  renderInterest(ind: number, add: boolean, interest: string) {
    return (<TouchableHighlight onPress={() => this.updateInterests(add, interest)} key={ind} underlayColor={commonColor.touchableUnderlay}>
      <View style={[styles.interest, general.flexRow]}>
        <Icon name={add ? "ios-add" : "ios-close"} style={styles.interestIcon}/>
        <Text style={styles.interestText}>{interest}</Text>
      </View>
    </TouchableHighlight>)
  }

  renderSelectedInterest(interest: string, ind: number) {
    return this.renderInterest(ind, false, interest)
  }

  renderFilteredInterest(interest: string, ind: number) {
    return this.renderInterest(ind, true, interest)
  }

  render () {
    const { filteredInterests, searchTerm } = this.state

    return (<View style={{}}>
      <View style={general.flexRowWrap}>
        {this.props.interests.map(this.renderSelectedInterest)}
      </View>
  
      <View style={general.largeTopMargin}/>
      <Form>
        <Item>
          <Icon active name='ios-search' />
          <Input placeholder='Search Interests' value={searchTerm} onChangeText={this.filterAvailableInterests}/>
        </Item>
      </Form>
      <View style={general.smallTopMargin}/>
      {Object.keys(filteredInterests).map((title, ind) => !!filteredInterests[title].length ? <ToggleRow key={ind} title={title}
        content={<View style={general.flexRowWrap}>
          {filteredInterests[title].map(this.renderFilteredInterest)}
        </View>}
      /> : null)}
      <View style={{paddingBottom: 20}}/>
    </View>)
  }
}
