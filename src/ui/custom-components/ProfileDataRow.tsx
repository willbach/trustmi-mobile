import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Text, View } from 'native-base'
import { EditButton } from 'ui/custom-components'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'

export interface Props {
  navigation: any
  icon: string
  title: string
  addText: string
}

const styles: any = StyleSheet.create({
  profileIcon: {
		fontSize: 28,
		color: commonColor.brandPrimary,
		position: 'absolute',
		top: 8,
		left: 16,
	},
	sectionTitle: {
		marginLeft: 64,
		marginVertical: 10,
		fontSize: 18,
  },
  editButton: {
		position: 'absolute',
		right: 16,
		top: 16,
	},
	editIcon: {
		fontSize: 32,
		color: commonColor.brandPrimary,
  },
  link: {
		color: commonColor.brandSecondary,
		marginLeft: 16,
		marginVertical: 8,
		textDecorationLine: 'underline'
	},
})

export default class ProfileDataRow extends React.Component<Props> {
  render() {
    const { navigation, icon, title, addText } = this.props

    return <View style={general.row}>
      <Icon name={icon} style={styles.profileIcon}/>
      <EditButton containerStyle={styles.editButton} style={styles.editIcon} onPress={() => navigation.navigate('EditProfile')} />
      <Text style={styles.sectionTitle}>{title}</Text>

      {this.props.children}

      <Text style={styles.link} onPress={() => navigation.navigate('AddData', {type: addText})}>{`Add ${addText}`}</Text>
    </View>
  }
}
