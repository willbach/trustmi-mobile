import React from 'react'
import { TouchableHighlight, View, Dimensions } from 'react-native'
import { Text } from 'native-base'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  onPress: () => void
  percentage: number
  style?: any
}

export default class ProfileCompletionBar extends React.Component<Props> {
  render() {
    const { onPress, percentage, style } = this.props

    const barHeight = 30
    const barWidth = width - 30
    const styles : any = {
      bar: {
        height: barHeight,
        marginTop: 5,
        marginBottom: 10,
      },
      barOutline: {
        width: barWidth,
        height: barHeight,
        borderWidth: 3,
        borderColor: commonColor.brandSecondary,
        position: 'absolute',
        top: 10,
        borderRadius: 15,
        zIndex: 1,
        backgroundColor: commonColor.white
      },
      barFill: {
        width: barWidth / 100 * percentage,
        height: barHeight,
        backgroundColor: commonColor.brandSecondary,
        position: 'absolute',
        top: 10,
        borderRadius: 15,
        zIndex: 1,
      },
      text: {
        color: commonColor.brandPrimary,
        position: 'absolute',
        top: 15,
        fontSize: 14,
        paddingLeft: 10,
        zIndex: 2,
        fontWeight: 'bold',
      }
    }

    return (
      <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={[general.standardHMargin, style]}>
        <View style={styles.bar}>
          <Text style={styles.text}>{`Your profile is ${percentage}% complete`}</Text>
          <View style={styles.barOutline}/>
          <View style={styles.barFill}/>
        </View>
      </TouchableHighlight>
    )
  }
}
