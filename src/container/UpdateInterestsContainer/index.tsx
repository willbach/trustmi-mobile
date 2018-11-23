// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

import UpdateInterests from 'stories/screens/UpdateInterests'

export interface Props {
	navigation: any
  profileStore: any
  userStore: any
  groupStore: any
}
export interface State {}

@inject('profileStore')
@inject('userStore')
@inject('groupStore')
@observer
export default class UpdateInterestsContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

    this.goBack = this.goBack.bind(this)
    this.addInterest = this.addInterest.bind(this)
    this.removeInterest = this.removeInterest.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }
  
  addInterest = (interest: string) => {
    this.props.profileStore.addInterest(this.props.userStore.pin, interest)
  }

  removeInterest = (interest: string) => {
    this.props.profileStore.removeInterest(this.props.userStore.pin, interest)
  }

	render() {
    const { profileStore: { interests }, groupStore: { availableInterests } } = this.props

		return <UpdateInterests goBack={this.goBack} addInterest={this.addInterest} removeInterest={this.removeInterest} interests={interests} availableInterests={availableInterests}/>
	}
}
