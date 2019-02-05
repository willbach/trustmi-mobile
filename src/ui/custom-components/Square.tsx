import variable from 'theme/variables/platform'
import commonColor from 'theme/variables/commonColor'
import * as React from 'react'
import { View, TouchableHighlight, Dimensions } from 'react-native'
import { Text } from 'native-base'

import general from 'theme/general'

const { width } = Dimensions.get('window')

const styles = {
  squareStyle: (numSquares: number) => ({
    width: (width - 16 * numSquares) / numSquares,
    height: (width - 16 * numSquares) / numSquares,
    borderTopWidth: 1,
    borderTopColor: commonColor.brandSecondary,
  }),
  interiorStyle: {
    marginHorizontal: 10,
    marginVertical: 10
  }
}

export interface Props {
  onPress?: () => void // must be void
  containerStyle?: any
  squareStyle?: any
  squaresPerRow: number
}

export interface State {}

export default class Square extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }

  render() {
    const { onPress, squareStyle, containerStyle, squaresPerRow } = this.props

    return (
      <TouchableHighlight onPress={onPress} style={[styles.squareStyle(squaresPerRow), containerStyle]} underlayColor="transparent" >
        <View style={[styles.interiorStyle, squareStyle]}>
          {this.props.children}
        </View>
      </TouchableHighlight>
    );
  }
}
