import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Form, Item, Input, Picker } from 'native-base'
import { LogoHeader } from 'ui/custom-components'

import { USER_TYPES, USER_PURPOSES } from 'theme/constants'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import styles from './styles'

//import styles from './styles'
export interface Props {
  submitObjectives: () => void
  setUserType: (objective: string) => void
  setUserPurpose: (objective: string) => void
  setUserIntro: (intro: string) => void
  userIntro: string
}

export interface State {
  type: number
  purpose: number
}

export default class SetupObjectives extends React.Component<Props, State> {
	constructor(props) {
    super(props)

    this.state = {
      type: 0,
      purpose: 0
    }
  }

  setUserType(value: number) {
    this.props.setUserType(USER_TYPES[value])
    this.setState({ type: value })
  }

  setUserPurpose(value: number) {
    this.props.setUserPurpose(USER_PURPOSES[value])
    this.setState({ purpose: value })
  }

	render() {
    const { props: { submitObjectives, setUserIntro, userIntro }, state: { type, purpose } } = this

    return (
      <Container>
        <LogoHeader />
        <Content>
          <Form>
            <Text style={general.h2}>What best describes you?</Text>
            <Picker mode="dropdown" iosHeader="What best describes you?" iosIcon={<Icon name="arrow-down" />}
              style={styles.picker} selectedValue={type} onValueChange={this.setUserType.bind(this)}>

              {USER_TYPES.map((type, ind) => <Picker.Item label={type} value={ind} key={ind} />)}
            </Picker>
            <Text style={general.h2}>What are you looking for?</Text>
            <Picker mode="dropdown" iosHeader="What are you looking for?" iosIcon={<Icon name="arrow-down" />}
              style={styles.picker} selectedValue={purpose} onValueChange={this.setUserPurpose.bind(this)}>

              {USER_PURPOSES.map((type, ind) => <Picker.Item label={type} value={ind} key={ind}/>)}
            </Picker>

            <Text style={general.h2}>Introduce Yourself</Text>
            <Item>
              <Input placeholder='Do you have a company? An idea? What do you bring to a startup? What are you looking for in a co-founder?' value={userIntro}
                onBlur={() => null} maxLength={300} onChangeText={setUserIntro} multiline={true} style={styles.intro}>
              </Input>
            </Item>
          </Form>
          <View padder>
            <Button block onPress={submitObjectives}>
              <Text>Next</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
	}
}
