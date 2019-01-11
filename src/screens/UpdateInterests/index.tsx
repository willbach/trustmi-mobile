import * as React from 'react'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Left, Right, Form, Item, Input } from 'native-base'
import ModifyInterests from 'ui/components/ModifyInterests'
import AvailableInterests from 'types/AvailableInterests'

import general from 'theme/general'
import styles from './styles'

export interface Props {
  goBack: () => void
  addInterest: (interest: string) => void
  removeInterest: (interest: string) => void
  interests: string[]
  availableInterests: AvailableInterests
  title?: string
  intro?: string
  origin?: string
}

export default class UpdateInterests extends React.Component<Props> {
	constructor(props) {
    super(props)
  }

  renderIntro() {
    const { intro } = this.props
    if (!!intro) {
      return <Text style={[styles.intro, general.standardHMargin]}>{intro}</Text>
    } else {
      return null
    }
  }

	render() {
    const { addInterest, removeInterest, interests, availableInterests, title } = this.props

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={this.props.goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{!!title ? title : 'Update Interests'}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={general.largeTopMargin}/>
          {this.renderIntro()}
          <ModifyInterests addInterest={addInterest} removeInterest={removeInterest} interests={interests} availableInterests={availableInterests}/>
        </Content>
      </Container>
    )
	}
}
