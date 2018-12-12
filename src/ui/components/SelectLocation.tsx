import * as React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Icon, Text } from 'native-base'
import City from 'types/City'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

export interface Props {
  onPress: () => void
  location: City
}

const styles = StyleSheet.create({
  component: { height: 40 },
  icon: { fontSize: 36, color: commonColor.brandPrimary, marginRight: 10 },
  text: { fontSize: 18, color: commonColor.brandPrimary }
})

export default class ProfilePic extends React.Component<Props> {
  render() {
    const { onPress, location: { city, state } } = this.props

    return (<TouchableHighlight style={styles.component} onPress={onPress} underlayColor={commonColor.touchableUnderlay}>
      <View style={general.flexRowCenter}>
        <Icon style={styles.icon} name={"ios-pin"}/>
        <Text style={styles.text}>{`${city}, ${state}`}</Text>
      </View>
    </TouchableHighlight>)
  }
}
