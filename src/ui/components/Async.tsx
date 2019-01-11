import * as React from "react"
import { ActivityIndicator } from 'react-native'
import { Toast } from 'native-base'

import commonColor from 'theme/variables/commonColor'

export interface Props {
  navigation: any
  promise: Promise<any>
  onResolve: (result: any) => React.ReactNode
  onError?: (error: any) => void
}
export interface State {
  content: React.ReactNode
}

export default class Async extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = { content: <ActivityIndicator size="large" color={commonColor.brandPrimary} /> }

    this.defaultOnError = this.defaultOnError.bind(this)
  }

  async componentWillMount() {
    const { promise, onResolve, onError } = this.props
    
    try {
      const data = await promise
      this.setState({ content: onResolve(data) })
    } catch (error) {
      if (onError) {
        onError(error)
      } else {
        this.defaultOnError(error)
      }
    }
  }

  defaultOnError(error) {
    console.log('ASYNC LOADING ERROR:', error)
    this.props.navigation.navigate('Home')
    Toast.show({
      type: 'danger',
      text: 'There was an error loading the group, please try again later',
      duration: 2000,
      position: 'bottom',
      textStyle: { textAlign: 'center' },
    })
  }

  render() {
    return this.state.content
  }
}
