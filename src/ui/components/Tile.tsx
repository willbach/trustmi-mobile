import variable from "theme/variables/platform"
import commonColor from 'theme/variables/commonColor'
import * as React from "react"
import { View, ScrollView, TouchableHighlight, Image, StyleSheet, Platform, Dimensions } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base"

import general from 'theme/general'

const { width } = Dimensions.get('window')

export interface Props {
  onPress: () => void // must be void
  cardStyle?: any // (stylesheet)
  image?: any // (tsx element)
  headerText?: string
  contentText?: string
  footerText?: string
  tilesPerRow: number // determines how wide to make the tile
  child?: any // (list of tsx elements), this component should only take either a child element or some combination of image/header/content/footer
}

export interface State {}

class Tile extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }

  generateCardStyle() {
    const tileWidth = Math.max((width - 80) / this.props.tilesPerRow, 80)
    const defaultStyle: any = {
      // flex: 1,
      // borderWidth: variable.borderWidth,
      // borderColor: variable.cardBorderColor,
      borderRadius: 5,
      flexWrap: "wrap",
      backgroundColor: variable.cardDefaultBg,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 2.5,
      elevation: 3,
      width: tileWidth,
      height: Math.min(100, tileWidth)
    }

    if (typeof this.props.cardStyle === 'object') {
      Object.keys(this.props.cardStyle).map(prop => defaultStyle[prop] = this.props.cardStyle[prop])
    }

    return defaultStyle
  }

  generateContent() {
    const { image, headerText, contentText, footerText, child } = this.props
    const headerFooterStyle = { color: commonColor.white, fontSize: 16 }
    return <View style={general.centeredColumn}>
      {headerText ? <Text style={headerFooterStyle}>{headerText}</Text> : null}
      {image}
      {contentText ? <Text style={{color: commonColor.white}}>{contentText}</Text> : null}
      {footerText ? <Text style={headerFooterStyle}>{footerText}</Text> : null}
      {child ? child : null}
    </View>
  }

  render() {
    const { onPress, cardStyle } = this.props
    return (
      <TouchableHighlight onPress={onPress} style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <View style={this.generateCardStyle()}>
          {this.generateContent()}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Tile
