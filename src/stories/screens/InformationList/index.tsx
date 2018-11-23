import * as React from "react"
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base"

import styles from "./styles"
import general from 'theme/general'

export interface Props {
  navigation: any
  title: string
  list: any
}
export interface State {}
class InformationList extends React.Component<Props, State> {
  render() {
    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name='ios-arrow-back' />
						</Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("VerifiedPage", { name: item.name, service: item.service})}
              >
                <Left>
                  <Text>{item.name}</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default InformationList