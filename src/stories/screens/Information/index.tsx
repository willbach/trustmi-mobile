import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Information extends React.Component<Props, State> {
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
            <Title>Information</Title>
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
                <Text>{item.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Information;
