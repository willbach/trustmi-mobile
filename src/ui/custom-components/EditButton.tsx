import * as React from 'react'
import { Icon } from 'native-base'
import { TouchableHighlight } from 'react-native'

export interface Props {
  containerStyle: any
  style: any
  onPress: () => void
}

export default class HeaderSearchBar extends React.Component<Props> {
  render() {
    const { containerStyle, style, onPress } = this.props

    return <TouchableHighlight style={containerStyle} onPress={onPress}>
      <Icon name="md-create" style={style} />
    </TouchableHighlight>
  }
}
