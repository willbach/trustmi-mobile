import React from 'react'
import { Dimensions, TouchableHighlight } from 'react-native'
import { Text, View } from 'native-base'
import ProfilePic from './ProfilePic'

import Member from 'types/Member'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

const styles = {
  memberWrapper: {
    marginHorizontal: 2
  },
  verticalSpacing: {
    marginVertical: 10
  },
  staggered: {
    marginLeft: -15
  }
}

export interface Props {
  members: Member[]
  screen?: string
  onPress?: () => void
  style?: any
  staggered?: boolean
}

export default class MembersDisplay extends React.Component<Props> {
  render() {
    const { members, screen, onPress, style, staggered } = this.props

    return <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={style}>
      <View style={styles.verticalSpacing}>
        <View style={general.flexRowCenter}>
          {members.slice().map((member: Member, ind: number) => <ProfilePic key={ind} imageId={member.id} size={30} containerStyle={[styles.memberWrapper, staggered ? styles.staggered : {}]}/>)}
        </View>
        {this.props.children}
      </View>
    </TouchableHighlight>
  }
}
