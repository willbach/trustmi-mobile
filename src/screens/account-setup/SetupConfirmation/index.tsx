import * as React from 'react'
import { Image, Platform, BackHandler } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'
import { LogoHeader } from 'ui/custom-components'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general';
import styles from './styles'

//import styles from './styles'
export interface Props {
  
}

export default class SetupConfirmation extends React.Component<Props> {
	constructor(props) {
    super(props)
  }

	render() {
    return (
      <Container>
        <LogoHeader />
        <Content>
          <Text style={general.h2}>Your Account is Being Verified!</Text>
          <Text style={general.standardHMargin}>Thank you for submitting your information! We will notify you via text as soon as your identity has been verified (1-2 hours).</Text>
          <Text style={[general.standardHMargin, general.smallTopMargin]}>In the meantime, get a head start by entering additional data for better matches:</Text>
          <View style={[general.standardHMargin, general.smallTopMargin]}>
            <Text>Connect LinkedIn</Text>
            <Text>Add Test Score</Text>
            <Text>Add Credit Score</Text>
          </View>
        </Content>
      </Container>
    )
	}
}
