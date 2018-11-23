import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  date: string
  daysInFuture: number
  style?: any
}

export default class GroupTile extends React.Component<Props> {
  render() {
    const { date, daysInFuture, style } = this.props

    const styles : any = {
      text: {
        borderTopColor: commonColor.lightGray,
        borderTopWidth: 2,
        borderBottomColor: commonColor.lightGray,
        borderBottomWidth: 2,
        backgroundColor: commonColor.paleGray,
        fontSize: 14,
        color: commonColor.brandPrimary,
        paddingLeft: 10,
        paddingVertical: 6,
        marginTop: 15,
        marginBottom: 5,
      }
    }

    let dateText = date
    if (daysInFuture === 0) {
      dateText = 'Today, ' + dateText
    } else if (daysInFuture === 1) {
      dateText = 'Tomorrow, ' + dateText
    }

    return (
      <View style={style}>
        <Text style={styles.text}>{dateText}</Text>
      </View>
    )
  }
}
