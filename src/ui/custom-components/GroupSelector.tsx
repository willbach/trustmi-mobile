import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import Group from 'types/Group'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  navigation: any
  group: Group
}

export default class GroupSelector extends React.Component<Props> {
  render() {
    return <View>

    </View>
  }
}
