import * as React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Text } from 'native-base'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

export interface Props {
  onPress?: () => void
  interests: string[]
}

const styles = StyleSheet.create({
  interest: {
		color: commonColor.white,
		fontSize: 14,
		backgroundColor: commonColor.brandPrimary,
		paddingVertical: 3,
		paddingHorizontal: 6,
		margin: 5,
		borderRadius: 5,
	},
})

export default class Interests extends React.Component<Props> {
  render() {
    return <TouchableHighlight onPress={this.props.onPress} underlayColor={commonColor.touchableUnderlay}>
      <View style={general.flexRowWrap}>
        {this.props.interests.map((ele: string, ind: number) => (<Text key={ind} style={styles.interest}>{ele}</Text>))}
      </View>
    </TouchableHighlight>
  }
}
