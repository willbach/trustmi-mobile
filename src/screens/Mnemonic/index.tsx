import * as React from 'react'
import { Platform } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from 'native-base'

import commonColor from 'theme/variables/commonColor'

//import styles from './styles'
export interface Props {
  mnemonic: string
  copy: (text: string) => void
  nextScreen: () => void
}

export interface State {}

export default class Mnemonic extends React.Component<Props, State> {
	constructor(props) {
    super(props)
		
  }

	render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Icon name='flash' style={{ fontSize: 104 }} />
            <Title>ThePond</Title>
            <View padder>
              <Text style={{ color: Platform.OS === 'ios' ? commonColor.black : commonColor.white }} />
            </View>
          </Body>
        </Header>
        <Content>
          <View padder>
            <Text>{this.props.mnemonic}</Text>
          </View>
          <View padder>
            <Button block onPress={() => this.props.copy(this.props.mnemonic)}>
              <Text>Copy to clipboard</Text>
            </Button>
          </View>
          <View padder>
            <Button block onPress={this.props.nextScreen}>
              <Text>Next</Text>
            </Button>
          </View>
        </Content>
        {/* <Footer style={{ backgroundColor: '#F8F8F8' }}>
          <View style={{ alignItems: 'center', opacity: 0.5, flexDirection: 'row' }}>
            <View padder>
              <Text style={{ color: '#000' }}>Made with love at </Text>
            </View>
            <Image
              source={{ uri: 'https://geekyants.com/images/logo-dark.png' }}
              style={{ width: 422 / 4, height: 86 / 4 }}
            />
          </View>
        </Footer> */}
      </Container>
    );

	}
}
