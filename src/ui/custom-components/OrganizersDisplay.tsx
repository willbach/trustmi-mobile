import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import Member from 'types/Member'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  navigation: any
  organizers: Member[]
  screen?: string
}

export default class OrganizersDisplay extends React.Component<Props> {
  render() {
    return <View>

    </View>
  }
}
