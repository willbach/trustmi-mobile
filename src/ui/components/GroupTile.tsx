import React from 'react'
import { TouchableHighlight, View, Dimensions } from 'react-native'
import { Icon, Text } from 'native-base'

import Group from 'types/Group'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

const { width, height } = Dimensions.get('window')

export interface Props {
  group: Group
  onPress: () => void
  style?: any
  addIcon?: boolean
}

export default class GroupTile extends React.Component<Props> {
  render() {
    const { group, onPress, style, addIcon } = this.props

    if (!group)
      return null

    const tileWidth = (width - 45)/2.5
    const tileHeight = (width - 45)/3.5
    const styles : any = {
      group: { width: tileWidth, height: tileHeight, marginRight: 15 },
      groupImage: { width: tileWidth, height: tileHeight, zIndex: 1, position: 'absolute', backgroundColor: commonColor.brandPrimary, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 1, height: 3 }, shadowOpacity: 1, shadowRadius: 2.5 },
      groupTitle: { fontSize: 12, color: commonColor.white, zIndex: 2, marginBottom: 2, marginHorizontal: 5, fontWeight: 'bold' },
      groupText: { fontSize: 12, color: commonColor.white, zIndex: 2, marginBottom: 2, marginHorizontal: 5 },
      addIcon: { fontSize: 30, color: commonColor.brandSecondary, zIndex: 2, position: 'absolute', top: 10, right: 10, borderRadius: 15 }
    }

    return (
      <TouchableHighlight onPress={onPress} underlayColor={commonColor.touchableUnderlay} style={style}>
        <View style={[general.endColumn, styles.group]}>
          {/* <Image source={} style={styles.groupImage}/> */}
          <View style={styles.groupImage}/>
          <Text style={styles.groupTitle} numberOfLines={2}>{group.name}</Text>
          <Text style={styles.groupText}>{group.location}</Text>
          {!!addIcon ? <Icon name="ios-add-circle" style={styles.addIcon}/> : null}
        </View>
      </TouchableHighlight>
    )
  }
}
