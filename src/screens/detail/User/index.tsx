import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base'
import { View, ScrollView } from 'react-native'
import ProfilePic from 'ui/custom-components/ProfilePic'

import User from 'types/User'

import styles from './styles'
import general from 'theme/general'

export interface Props {
  userId: string
  navigation: any
  user: User
}
export interface State {
  
}

class UserDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.navigation.goBack()
  }

  render() {
    const { props: { userId, navigation, user: { id, email, first, middle, last, dateOfBirth } } } = this

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.goBack} transparent><Icon name="ios-arrow-back" /></Button>
          </Left>
          <Body>
            <Title>{`${first} ${last}`}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.centeredColumn}>
            <ProfilePic imageId={id} size={300} />
            <Text>{`${first} ${middle.slice(0, 1)} ${last}`}</Text>
            <Text>{email}</Text>
            <Text>{dateOfBirth}</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default UserDetail
