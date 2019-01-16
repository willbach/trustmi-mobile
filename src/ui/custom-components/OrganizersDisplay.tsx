import React from 'react'
import { Dimensions, TouchableHighlight } from 'react-native'
import { Icon, Text, View } from 'native-base'

import Member from 'types/Member'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import ProfilePic from 'ui/custom-components/ProfilePic'

const { width, height } = Dimensions.get('window')

const styles = {
  memberWrapper: {
    marginHorizontal: 2
  },
  verticalSpacing: {
    marginVertical: 10
  }
}

export interface Props {
  organizers: Member[]
  screen?: string
  onPress?: () => void
  style?: any
}

export default class OrganizersDisplay extends React.Component<Props> {
  render() {
    const { organizers, screen, onPress, style } = this.props

    if (!organizers.length) {
      return <View/>
    }

    return <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={style}>
      <View style={styles.verticalSpacing}>
        <View style={general.flexRowCenter}>
          <ProfilePic imageId={organizers[0].id} size={30} />
          <Text>{`Organized by
${organizers[0].firstName} ${organizers[0].lastName} and ${organizers.length - 1} others`}</Text>
        </View>
        {/* chat icon? */}
      </View>
    </TouchableHighlight>
  }
}
