import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight, Image, StyleSheet, Platform, Dimensions } from 'react-native'
import { Icon } from 'native-base'

import commonColor from 'theme/variables/commonColor'

import general from 'theme/general'

const styles = StyleSheet.create({
  numpad: {
    marginTop: 15,
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    height: 70,
    width: '33%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backspace: {
    height: 50,
    width: 50,
    marginTop: '10%',
    marginRight: '12%'
  },
  number: {
    fontSize: 50,
    color: commonColor.brandSecondary
  },
  text: {
    fontSize: 20,
    color: commonColor.brandSecondary,
    textAlign: 'center'
  },
  headerText: {
    fontSize: 24,
    marginVertical: 16,
    color: commonColor.brandSecondary,
    textAlign: 'center',
    fontWeight: '100'
  },
  pinCircleRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },
  pinCircleSolid: {
    margin: 10,
    borderWidth: 2,
    borderColor: commonColor.brandSecondary,
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: commonColor.brandSecondary
  },
  pinCircleHollow: {
    margin: 10,
    borderWidth: 2,
    borderColor: commonColor.brandSecondary,
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: 'transparent'
  }
})

interface Props {
  onNumPress: (string) => void
  onBackspace: () => void
  pin: string
  headerText: string
  buttonStyle?: any
  textStyle?: any
  headerStyle?: any
  circlesStyleHollow?: any
  circlesStyleSolid?: any
}

export default class Pinpad extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  pinCircles() {
    const { pin, circlesStyleHollow, circlesStyleSolid } = this.props
    return <View style={styles.pinCircleRow}>
      {[0, 1, 2, 3].map(index => (
        <View style={pin[index] ? [styles.pinCircleSolid,circlesStyleSolid] : [styles.pinCircleHollow, circlesStyleHollow]} key={index}></View>
      ))}
    </View>
  }

  numberRow(numbers) {
    const { onNumPress, textStyle, buttonStyle } = this.props

    return <View style={styles.row} > 
      {numbers.map(number => (
        <TouchableHighlight underlayColor={commonColor.mediumGray} onPress={() => onNumPress(number)} style={[styles.button, buttonStyle]} key={number} >
          <View>
            <Text style={[styles.number, textStyle]}>{number}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  }

  render() {
    const { onNumPress, onBackspace, headerText, buttonStyle, textStyle, headerStyle } = this.props

    return <ScrollView keyboardShouldPersistTaps="always" style={general.fullHeight}>
      <Text style={[styles.headerText, headerStyle]}>{headerText}</Text>
      {this.pinCircles()}
      <View style={styles.numpad} >
        {this.numberRow(['1', '2', '3'])}
        {this.numberRow(['4', '5', '6'])}
        {this.numberRow(['7', '8', '9'])}
        <View style={styles.row} >
          <TouchableHighlight underlayColor={commonColor.mediumGray} onPress={() => null} style={[styles.button, buttonStyle]} >
            <View>
              <Text style={[styles.number, textStyle]}>{''}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={commonColor.mediumGray} onPress={() => onNumPress('0')} style={[styles.button, buttonStyle]} >
            <View>
              <Text style={[styles.number, textStyle]}>{'0'}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={commonColor.mediumGray} onPress={() => onBackspace()} style={[styles.button, buttonStyle]} >
            <View>
              <Icon name={'ios-backspace-outline'} style={[[styles.number, textStyle], { marginTop: 10 }]}/>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  }
}
