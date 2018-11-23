import React from 'react'
import { Icon, StyleProvider } from 'native-base'
import getTheme from '../../../native-base-theme/components'

export interface Props {
  family: string
  ios: string
  android: string
  style: any
  name: string
}

export class WrapperIcon extends React.Component<Props> {
  render() {
    return (
        <StyleProvider style={getTheme({ iconFamily: this.props.family })}>
            <Icon ios={this.props.ios} android={this.props.android} style={this.props.style} name={this.props.name} />
        </StyleProvider>
    )
  }
}
