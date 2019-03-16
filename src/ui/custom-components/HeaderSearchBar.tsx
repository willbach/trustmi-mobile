import * as React from 'react'
import { Icon, Form, Input, Item } from 'native-base'

import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

export interface Props {
  placeholder: string
  searchTerm?: string
  onChangeText: (text: string) => void
  type?: string
}

export default class HeaderSearchBar extends React.Component<Props> {
  render() {
    const { searchTerm, onChangeText, placeholder, type } = this.props
    let styles, placeholderTextColor

    if (type === 'dark') {
      placeholderTextColor = commonColor.brandPrimary
      styles = {
        searchBar: {
          paddingTop: 10,
          margin: 0,
          width: width - 60,
          borderBottomWidth: 1,
          borderBottomColor: commonColor.brandPrimary,
        },
        searchIcon: {
          color: commonColor.brandPrimary,
          fontSize: 20,
        },
        searchInput: {
          color: commonColor.brandPrimary,
          width: 200,
        }
      }
    } else {
      placeholderTextColor = commonColor.white
      styles = {
        searchBar: {
          paddingVertical: 10,
          margin: 0,
          borderBottomWidth: 0,
          width: width - 120,
          marginLeft: -20
        },
        searchIcon: {
          color: commonColor.white,
          fontSize: 20,
        },
        searchInput: {
          color: commonColor.white,
          width: 200,
        }
      }
    }

    return <Form>
      <Item style={styles.searchBar}>
        <Icon active name='ios-search' style={styles.searchIcon} />
        <Input style={styles.searchInput} placeholder={placeholder} value={searchTerm} onChangeText={onChangeText} placeholderTextColor={placeholderTextColor}/>
      </Item>
    </Form>
  }
}