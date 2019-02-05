import * as React from 'react'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, View, CheckBox } from "native-base"

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import styles from './styles'

export interface Props {
  navigation: any
  onContinue: (selectedQuestions: any) => void
  skip: () => void
  promptQuestions: any
}

export interface State {
  box0: boolean
  box1: boolean
  box2: boolean
}

export default class DataInputPrompt extends React.Component<Props> {
	constructor(props) {
    super(props)
    this.state = {
			box0: false,
      box1: false,
      box2: false,
    }
    
    this.continue = this.continue.bind(this)
    this.renderService = this.renderService.bind(this)
    this.checkBox = this.checkBox.bind(this)
  }

  checkBox(boxNumber) {
    if (boxNumber === 0) {
      this.setState({ box0: !this.state[`box${boxNumber}`] })
    } else if (boxNumber === 1) {
      this.setState({ box1: !this.state[`box${boxNumber}`] })
    } else if (boxNumber === 2) {
      this.setState({ box2: !this.state[`box${boxNumber}`] })
    }
  }

  renderService(service, ind) {
    return <View key={ind} style={styles.serviceRow}>
      <CheckBox checked={this.state[`box${ind}`]} color={commonColor.brandSecondary} onPress={() => this.checkBox(ind)} />
      <Text style={styles.service} onPress={() => this.checkBox(ind)}>{service.name}</Text>
    </View>
  }

  continue() {
    const { state, props: { onContinue, promptQuestions } } = this
    const selectedQuestions = promptQuestions.filter((_question, ind) => state[`box${ind}`])

    onContinue(selectedQuestions)
  }
	
	render() {
    const { navigation, promptQuestions, skip } = this.props

    return <Container style={general.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='ios-arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Verify Profile</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Text style={styles.promptText}>
            Enter your data to get better recommendations and qualify for more selective groups.
          </Text>
          <Text style={styles.promptText}>
            If you have any of the following ready, check the box and press "Continue"!
          </Text>
          <View style={general.centeredColumn}>
            <View>
              {promptQuestions.map(this.renderService)}
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.skip} onPress={skip} >skip</Text>
            <Button style={styles.continue} block onPress={this.continue}>
              <Text>Continue</Text>
            </Button>
          </View>
        </Form>
      </Content>
    </Container>
	}
}
