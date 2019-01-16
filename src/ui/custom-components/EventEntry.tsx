import React from 'react'
import { View, Dimensions, TouchableHighlight } from 'react-native'
import { Icon, Text } from 'native-base'
import { formatEventTime } from 'utils/format'

import Event from 'types/Event'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import GetImage from './GetImage';
import MembersDisplay from './MembersDisplay';

const { width, height } = Dimensions.get('window')
const styles: any = {
  event: {
    width: 150,
    marginLeft: 16
  },
  title: {
    color: commonColor.brandPrimary,
    fontSize: 14,
    fontWeight: 'bold'
  },
  time: {
    color: commonColor.mediumGray,
    fontSize: 12
  },
}

export interface Props {
  event: Event
  style?: any
  onPress?: () => void
}

export default class EventEntry extends React.Component<Props> {
  render() {
    const { style, onPress, event: { id, title, attendees, startTime } } = this.props

    return <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={style}>
      <View style={styles.event}>
        <GetImage imageId={id} size={150} />
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.time}>{formatEventTime(startTime)}</Text>
        <View style={general.flexRowCenter}>
          <MembersDisplay members={attendees} staggered />
          <Text style={styles.time}>{attendees.length}</Text>
        </View>
      </View>
    </TouchableHighlight>
  }
}
