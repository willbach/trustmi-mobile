import * as React from 'react'
import { Image, View, Dimensions } from 'react-native'
import { Icon } from 'native-base'
import { serverInterface } from 'server'

import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

export interface Props {
  imageId: string
  size: number
  type?: string
  fullscreen?: boolean
  icon?: string
  style?: any
}

export interface State {
  image?: string
}

const styles = {
  image: (size: number, fullscreen?: boolean) => ({
    height: fullscreen ? width * 0.75 : size,
    width: fullscreen ? width : size,
  }),
  icon: (size: number) => ({
    fontSize: size,
    color: commonColor.brandPrimary,
  }),
  circle: (size: number) => ({
    borderRadius: size / 2
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
      const image = await serverInterface.get(`/images/${imageId}`)
      this.setState({ image: `data:image/jpg;base64,${image}` })
    } catch (error) {
      // console.log('ERROR GETTING IMAGE FROM ID: ', imageId, error)
    }
  }

  render() {
    const { props: { size, style, icon, fullscreen, type }, state: { image } } = this

    let imageTypeStyle = {}

    if (type === 'circle') {
      imageTypeStyle = styles.circle(size)
    }

    return !!image ? <Image source={{ uri: image }} style={[style || styles.image(size, fullscreen), imageTypeStyle]} /> : !!icon ? <Icon name={icon} style={style || styles.icon(size)} /> : <View style={style || styles.image(size, fullscreen)} />
  }
}
