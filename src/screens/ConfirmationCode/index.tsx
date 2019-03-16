import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'
import { LogoHeader } from 'ui/custom-components'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general';
import styles from './styles'

//import styles from './styles'
export interface Props {
  confirmCode: () => void
  resendCode: () => void
  codeForm: any
	checkForm: Function
}

export default class Recover extends React.Component<Props> {
	constructor(props) {
    super(props)
  }

	render() {
    return (
      <Container>
        <LogoHeader />
        <Content>
          {this.props.codeForm}
          <View padder>
            <Button block onPress={this.props.confirmCode}>
              <Text>Confirm Code</Text>
            </Button>
            <View padder style={general.centeredColumn}>
              <Text>Didn't get a code?</Text>
              <Text style={styles.link} onPress={this.props.resendCode}>Resend Code</Text>
            </View>
          </View>
        </Content>
      </Container>
    )
	}
}
