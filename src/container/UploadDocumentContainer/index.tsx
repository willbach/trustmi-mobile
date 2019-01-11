import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import UploadDocument from 'screens/UploadDocument'

export interface Props {
	navigation: any
  profileStore: any
  documentStore: any
  userStore: any
}
export interface State {}

@inject('profileStore')
@inject('documentStore')
@inject('userStore')
@observer
export default class UpdateLocationContainer extends React.Component<Props, State> {
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
    const { profileStore: { profileData: { first, last, middle, sex, birthDate, city, state, zip, country } }, documentStore: { addDocument }, userStore: { address, privateKeyHex }, navigation } = this.props

    const type = navigation.state.params ? navigation.state.params.type : 'drivers'

		return <UploadDocument goBack={this.goBack} submit={addDocument({ address, privateKeyHex })} type={type} first={first} last={last} middle={middle} sex={sex} birthDate={birthDate} city={city} state={state} zip={zip} country={country} />
	}
}
