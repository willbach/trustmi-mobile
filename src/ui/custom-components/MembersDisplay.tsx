import React from 'react'
import { View, Dimensions, TouchableHighlight } from 'react-native'
import { Icon, Text } from 'native-base'
import ProfilePic from './ProfilePic'

import Member from 'types/Member'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

const styles = {
  memberWrapper: {
    marginHorizontal: 2
  }
}

export interface Props {
  members: Member[]
  screen?: string
  onPress?: () => void
  style?: any
}

export default class MembersDisplay extends React.Component<Props> {
  render() {
    const { members, screen, onPress, style } = this.props

    return <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={style}>
      <View>
        <View style={general.flexRowCenter}>
          {members.slice().map((member: Member) => <ProfilePic imageId={member.id} size={30} containerStyle={styles.memberWrapper}/>)}
        </View>
        <Text>Closed Group </Text>
      </View>
    </TouchableHighlight>
  }
}
