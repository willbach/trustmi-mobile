import * as React from 'react'
import { View } from 'react-native'
import { Icon } from 'native-base'
import GetImage from 'ui/components/GetImage'

import commonColor from 'theme/variables/commonColor'

export interface Props {
  imageId: string
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
    const { imageId, size, star } = this.props

    return (<View>
      <GetImage imageId={imageId} icon="ios-contact" size={size} />
      {!!star ? <Icon name="ios-star" style={styles.star(size)} /> : null}
    </View>)
  }
}
