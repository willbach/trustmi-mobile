import * as React from 'react'
import { Image, View } from 'react-native'
import { Icon } from 'native-base'
import { UnauthenticatedServerInterface } from 'server'

const server = new UnauthenticatedServerInterface()

import commonColor from 'theme/variables/commonColor'

export interface Props {
  imageId: string
  size: number
  icon?: string
  style?: any
}

export interface State {
  image?: string
}

const styles = {
  image: (size: number) => ({
    height: size,
    width: size,
  }),
  icon: (size: number) => ({
    fontSize: size,
    color: commonColor.brandPrimary,
  })
}

export default class GetImage extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    const { imageId } = this.props
    
    try {
      const image = await server.get(`/image/${imageId}`)
      this.setState({ image })
    } catch (error) {
      console.log('ERROR GETTING IMAGE FROM ID: ', imageId, error)
    }
  }

  render() {
    const { props: { size, style, icon }, state: { image } } = this
    console.log(style, size)

    return !!image ? <Image source={{ uri: image }} style={style || styles.image(size)} /> : !!icon ? <Icon name={icon} style={style || styles.icon(size)} /> : <View style={style || styles.image(size)} />
  }
}
