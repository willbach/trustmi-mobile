import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight, Image, StyleSheet, Platform, Dimensions } from 'react-native'

import commonColor from 'theme/variables/commonColor'

import style from 'theme/pinpad'
import general from 'theme/general'

interface Props {
  onNumPress: (string) => void
  onBackspace: () => void
  pin: string
  headerText: string
}

export default class Pinpad extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  pinCircles() {
    const { pin } = this.props
    return <View style={style.pinCircleRow}>
      {[0, 1, 2, 3].map(index => (
        <View style={pin[index] ? style.pinCircleSolid : style.pinCircleHollow} key={index}></View>
      ))}
    </View>
  }

  numberRow(numbers) {
    const { onNumPress } = this.props

    return <View style={style.row} > 
      {numbers.map(number => (
        <TouchableHighlight underlayColor={commonColor.touchableUnderlay} onPress={() => onNumPress(number)} style={style.button} key={number} >
          <View>
            <Text style={style.number}>{number}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  }

  render() {
    const { onNumPress, onBackspace, headerText } = this.props

    return <ScrollView keyboardShouldPersistTaps="always" style={general.fullHeight}>
      <View style={[general.centeredColumn, general.iosTopMargin, general.largeTopMargin]}>
      </View>
      <Text style={style.headerText}>{headerText}</Text>
      {this.pinCircles()}
      <View style={style.numpad} >
        {this.numberRow(['1', '2', '3'])}
        {this.numberRow(['4', '5', '6'])}
        {this.numberRow(['7', '8', '9'])}
        <View style={style.row} >
          <TouchableHighlight underlayColor={commonColor.touchableUnderlay} onPress={() => null} style={style.button} >
            <View>
              <Text style={style.number}>{''}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={commonColor.touchableUnderlay} onPress={() => onNumPress('0')} style={style.button} >
            <View>
              <Text style={style.number}>{'0'}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={commonColor.touchableUnderlay} onPress={() => onBackspace()} style={style.button} >
            <View>
              <Text style={style.number}>B</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  }
}
