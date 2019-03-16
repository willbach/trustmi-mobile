// @flow
import * as React from 'react'
import { Item, Input, Icon, Form, Toast } from 'native-base'
import { observer, inject } from 'mobx-react/native'

import language from 'language'

import UpdateInterests from 'screens/UpdateInterests'

export interface Props {
	navigation: any
  userStore: any
  groupStore: any
  createGroupStore: any
}
export interface State {}

@inject('userStore')
@inject('groupStore')
@inject('createGroupStore')
@observer
export default class UpdateInterestsContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    let refresh
    try { refresh = this.props.navigation.state.params.refresh } catch (e) {}

    this.props.navigation.goBack()

    if (refresh) {
      refresh()
    }
  }
  
	render() {
    const { userStore, groupStore: { availableInterests }, createGroupStore } = this.props

    let origin, intro, title, addInterest, removeInterest, interests
    try { origin = this.props.navigation.state.params.origin } catch (e) {}

    if (origin === 'createGroup') {
      title = 'Select Interests'
      intro = 'Choose some interests that describe your group:'
      addInterest = (interest: string) => createGroupStore.updateValue('interest', interest)
      removeInterest = (interest: string) => createGroupStore.updateValue('interest', interest)
      interests = createGroupStore.interests
    } else {
      addInterest = (interest: string) => userStore.addInterest(userStore.pin, interest)
      removeInterest = (interest: string) => userStore.removeInterest(userStore.pin, interest)
      interests = userStore.interests
    }

		return <UpdateInterests goBack={this.goBack} addInterest={addInterest} removeInterest={removeInterest} interests={interests} availableInterests={availableInterests} origin={origin} intro={intro} title={title}/>
	}
}
