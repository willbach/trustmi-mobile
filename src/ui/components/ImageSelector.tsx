import * as React from 'react'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Text, Icon } from 'native-base'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

export interface Props {
  icon: string
  caption: string
  image: any
  onPress: () => void
  containerStyle?: any
  style?: any
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    height: 150,
    width: 240,
    borderRadius: 10,
    borderTopWidth: 0,
  },
  doc: {
    justifyContent: 'center',
    height: 150,
    width: 240,
  },
  image: {
    height: 150,
    width: 240
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 5,
    color: commonColor.mediumGray,
    fontSize: 30
  },
  caption: {
    fontSize: 24,
    color: commonColor.brandPrimary
  }
})

export default class ImageSelector extends React.Component<Props> {
  render() {
    const { icon, caption, image, onPress, style, containerStyle } = this.props

    return <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={[styles.container, containerStyle, general.centeredColumn]}>
      <View style={[general.centeredColumn, styles.doc, style]}>
        {!image ? <Text style={styles.caption}>{caption}</Text> : <Image source={image} style={styles.image} />}
        <Icon style={styles.icon} name={icon} />
      </View>
    </TouchableHighlight>
  }
}
