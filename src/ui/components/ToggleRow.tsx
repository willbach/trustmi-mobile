import * as React from 'react'
import { TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { Text, View, Icon, Form, Item, Input } from 'native-base'
import AvailableInterests from 'types/AvailableInterests'

import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

const { width } = Dimensions.get('window')
const styles: any = StyleSheet.create({
  titleRow: { width, height: 50 },
  title: { fontSize: 18, color: commonColor.brandPrimary, paddingLeft: 10 },
  icon: { fontSize: 30, color: commonColor.brandPrimary, paddingRight: 10 }
})

export interface Props {
  title: string
  content: any
}

export interface State {
  open: boolean
}

export default class ToggleRow extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { props: { title, content }, state: { open } } = this

    return (<View>
      <TouchableHighlight onPress={this.toggle} underlayColor={commonColor.touchableUnderlay} >
        <View style={[general.centeredRowBetween, styles.titleRow]}>
          <Text style={styles.title}>{title}</Text>
          <Icon name={open ? "ios-arrow-down" : "ios-arrow-forward"} style={styles.icon}/>
        </View>
      </TouchableHighlight>
      {open ? <View style={general.standardVMargin}>
        { content }
      </View> : null}
    </View>)
  }
}
