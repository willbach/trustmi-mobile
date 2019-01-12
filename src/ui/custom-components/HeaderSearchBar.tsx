import * as React from 'react'
import { Icon, Form, Input, Item } from 'native-base'

import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

const styles = {
  searchBar: {
    paddingVertical: 10,
    margin: 0,
    borderBottomWidth: 0,
    width: width - 120,
    marginLeft: -20
  },
  searchIcon: {
    color: commonColor.white,
  },
  searchInput: {
    color: commonColor.white,
    width: 200,
  }
}

export interface Props {
  placeholder: string
  searchTerm?: string
  onChangeText: (text: string) => void
}

export default class HeaderSearchBar extends React.Component<Props> {
  render() {
    const { searchTerm, onChangeText, placeholder } = this.props

    return <Form>
      <Item style={styles.searchBar}>
        <Icon active name='ios-search' style={styles.searchIcon} />
        <Input style={styles.searchInput} placeholder={placeholder} value={searchTerm} onChangeText={onChangeText} placeholderTextColor={commonColor.white}/>
      </Item>
    </Form>
  }
}