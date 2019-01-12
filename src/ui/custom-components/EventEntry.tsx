import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import Event from 'types/Event'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  navigation: any
  event: Event
}

export default class EventEntry extends React.Component<Props> {
  render() {
    return <View>

    </View>
  }
}
