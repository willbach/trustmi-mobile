import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight, Image, StyleSheet, Platform, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
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
    color: '#d42ed3'
  },
  text: {
    fontSize: 20,
    color: '#d42ed3',
    textAlign: 'center'
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
    color: '#000000',
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
    borderWidth: 3,
    borderColor: '#d42ed3',
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: '#d42ed3'
  },
  pinCircleHollow: {
    margin: 10,
    borderWidth: 3,
    borderColor: '#d42ed3',
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: 'transparent'
  }
})

const general = StyleSheet.create({
  flex: {
    flex: 1
  },
  whiteFlex: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flexColumn: {
    flexDirection: 'column'
  },
  stretch: {
    marginRight: 15,
    flex: 1
  },
  flexGrow: {
    flexGrow: 1
  },
  view: {
    backgroundColor: '#ffffff'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  centeredColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  fullHeight: {
    minHeight: height
  },
  betweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  standardHMargin: {
    marginHorizontal: 15
  },
  largeHMargin: {
    marginHorizontal: 30
  },
  smallTopMargin: {
    marginTop: 10
  },
  mediumTopMargin: {
    marginTop: 20
  },
  largeTopMargin: {
    marginTop: 30
  },
  smallVMargin: {
    marginVertical: 10
  },
  iosTopMargin: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  spaceBelow: {
    paddingBottom: 40
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  spaceBelowM: {
    paddingBottom: 20
  }
} as any)


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
        <TouchableHighlight underlayColor={'#ffffff'} onPress={() => onNumPress(number)} style={style.button} key={number} >
          <View>
            <Text style={style.number}>{number}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  }

  render() {
    const { onNumPress, onBackspace, headerText } = this.props

    return <ScrollView keyboardShouldPersistTaps="always">
      <View style={[general.centeredColumn, general.iosTopMargin, {marginBottom: 10}]}>
      </View>
      <Text style={style.headerText}>{headerText}</Text>
      {this.pinCircles()}
      <View style={style.numpad} >
        {this.numberRow(['1', '2', '3'])}
        {this.numberRow(['4', '5', '6'])}
        {this.numberRow(['7', '8', '9'])}
        <View style={style.row} >
          <TouchableHighlight underlayColor={'#ffffff'} onPress={() => null} style={style.button} >
            <View>
              <Text style={style.number}>{''}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ffffff'} onPress={() => onNumPress('0')} style={style.button} >
            <View>
              <Text style={style.number}>{'0'}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ffffff'} onPress={() => onBackspace()} style={style.button} >
            <View>
              <Text style={style.number}>B</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  }
}
