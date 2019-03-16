import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import UploadDocument from 'screens/UploadDocument'

export interface Props {
	navigation: any
  userStore: any
  documentStore: any
}
export interface State {}

@inject('userStore')
@observer
export default class UpdateLocationContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

    this.goBack = this.goBack.bind(this)
    this.submit = this.submit.bind(this)
  }

  goBack() {
    let refresh
    try { refresh = this.props.navigation.state.params.refresh } catch (e) {}

    this.props.navigation.goBack()

    if (refresh) {
      refresh()
    }
  }

  async submit(data) {
    const { props: { documentStore: { addDocument }, userStore: { address, privateKeyHex }, navigation: { state: { params: { onContinue } } } } } = this
    
    if (onContinue) {
      addDocument({ address, privateKeyHex })(data)
      onContinue()
      
    } else {
      await addDocument({ address, privateKeyHex })(data)
      this.goBack()
    }
  }
  
	render() {
    const { userStore: { first, last, middle, sex, dateOfBirth, city, state, zip, country }, navigation } = this.props

    const type = navigation.state.params ? navigation.state.params.type : 'photoId'

		return <UploadDocument goBack={this.goBack} submit={this.submit} type={type} first={first} last={last} middle={middle} sex={sex} dateOfBirth={dateOfBirth} city={city} state={state} zip={zip} country={country} />
	}
}
