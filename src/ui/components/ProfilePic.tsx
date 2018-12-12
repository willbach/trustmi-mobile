import * as React from 'react'
import { Image, View } from 'react-native'
import { Icon } from 'native-base'

import commonColor from 'theme/variables/commonColor'

export interface Props {
  image: string
  size: number
  star?: boolean
}

const styles = {
  profilePic: (size: number) => ({
    height: size,
    width: size,
  }),
  avatarIcon: (size: number) => ({
    fontSize: size,
    color: commonColor.brandPrimary,
  }),
  star: (size: number) => ({
    fontSize: size * 0.4,
    color: commonColor.brandSecondary,
    position: 'absolute',
    bottom: 5,
    right: 0,
  }),
}

export default class ProfilePic extends React.Component<Props> {
  render() {
    const { image, size, star } = this.props

    return (<View>
      {!!image ? <Image source={{uri: image}} style={styles.profilePic(size)} /> : <Icon name="ios-contact" style={styles.avatarIcon(size)}/>}
      {!!star ? <Icon name="ios-star" style={styles.star(size)} /> : null}
    </View>)
  }
}
