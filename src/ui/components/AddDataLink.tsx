import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'

import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

export interface Props {
  onPress: () => void
  text: string
  style?: any
}
class AddDataLink extends React.Component<Props> {
  render() {
    const styles : any = {
      miniTitle: {
        fontSize: 16,
        color: commonColor.brandPrimary,
      },
      rightArrow: {
        fontSize: 18,
        marginLeft: 6,
        marginTop: 3,
        color: commonColor.brandSecondary
      }
    }

    return (
      <TouchableHighlight onPress={this.props.onPress} style={[general.standardHMargin, this.props.style, {paddingLeft: 2}]} underlayColor={commonColor.touchableUnderlay}>
        <View style={general.flexRow}>
          <Text style={styles.miniTitle} >{this.props.text}</Text>
          <Icon name="ios-arrow-forward" style={styles.rightArrow}/>
        </View>
      </TouchableHighlight>
    )
  }
}

export default AddDataLink
