import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Groups extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Groups</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
        </Content>
      </Container>
    );
  }
}

export default Groups;
