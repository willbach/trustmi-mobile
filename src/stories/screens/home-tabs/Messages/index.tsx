import * as React from "react"
import { View, TouchableHighlight } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, Form, Item, Input } from "native-base"
import { WrapperIcon } from 'ui/components/WrapperIcon'

import Chat from 'types/Chat'
import Member from 'types/Member'
import Message from 'types/Message'
import Notification from 'types/Notification'

import { messageDate, formatMsgPreview } from 'utils/format'

import styles from "./styles"
import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

export interface Props {
  navigation: any
  chats: Chat[]
  notifications: Notification[]
}
export interface State {
  newMessages: Chat[]
  newNotifications: Notification[]
  filteredChats: Chat[]
  filteredNotifications: Notification[]
  searchTerm?: string
}
class Messages extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      newMessages: [props.chats[0]],
      newNotifications: [],
      filteredChats: props.chats,
      filteredNotifications: props.notifications,
    }

    this.filterMessagesAndNotifications = this.filterMessagesAndNotifications.bind(this)
    this.getImage = this.getImage.bind(this)
    this.renderChat = this.renderChat.bind(this)
    this.renderNotification = this.renderNotification.bind(this)
  }

  filterMessagesAndNotifications(searchTerm?: string) {
    //TODO: add some good search functionality here
  }

  getImage(id: string, type: string, newItem: boolean) {
    // return <Image source={} style={styles.itemImage}/>
    return <View style={[styles.itemImage, type === 'chat' ? styles.chatImageRounding : {}]}>{!newItem ? null : <View style={styles.newItemIndicator}/>}</View>
  }

  renderRow(ind: number, title: string, image: string, onPress: () => void, body: any, type: string, newItem: boolean) {
    return (<TouchableHighlight key={ind} onPress={onPress} underlayColor={commonColor.touchableUnderlay}>
      <View style={[general.flexRow, styles.item]}>
        {this.getImage(image, type, newItem)}
        <View style={general.flexColumn}>
          <Text style={styles.itemTitle} numberOfLines={1}>{title}</Text>
          {body}
        </View>
      </View>
    </TouchableHighlight>)
  }

  renderChat(chat: Chat, ind: number, newItem = false) {
    const title = `${chat.title}`
    const body = (<View>
      <Text style={styles.itemText} numberOfLines={1}>{formatMsgPreview(chat)}</Text>
      <Text style={styles.dateText}>{this.timeAndGroup(chat.messages[0].timeStamp, chat.groupName)}</Text>
    </View>)
    return this.renderRow(ind, title, chat.id, () => this.props.navigation.navigate('Chat', { chat }), body, 'chat', newItem)
  }

  renderNotification(notification: Notification, ind: number, newItem = false) {
    const body = (<View>
      <Text style={styles.itemText} numberOfLines={1}>{notification.text}</Text>
      <Text style={styles.dateText} numberOfLines={1}>{this.timeAndGroup(notification.timeStamp, notification.groupName)}</Text>
    </View>)
    return this.renderRow(ind, notification.title, notification.id, () => this.props.navigation.navigate('Notification', { notification }), body, 'notification', newItem)
  }

  timeAndGroup(timeStamp: Date, groupName: string) {
    return `${messageDate(timeStamp)} · ${groupName}`
  }

  render() {
    const { newMessages, newNotifications, filteredChats, filteredNotifications, searchTerm } = this.state

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon active name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Messages</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Icon active name='ios-search' />
              <Input placeholder='Search Messages and Notifications' value={searchTerm} onChangeText={this.filterMessagesAndNotifications}/>
            </Item>
          </Form>
          {!newMessages.length && !newNotifications.length ? null :<View style={general.mediumTopMargin}>
            <View style={[general.standardHMargin, general.flexColumn]}>
              {newMessages.map((ele, ind) => this.renderChat(ele, ind, true))}
              {newNotifications.map((ele, ind) => this.renderNotification(ele, ind, true))}
            </View>
          </View>}
          <Text style={general.subHeader}>Messages</Text>
          <View style={[general.standardHMargin, general.flexColumn]}>
            {!filteredChats.length ? <Text style={styles.noneMessage}>You have no messages, start a conversation!</Text> : null}
            {filteredChats.map((ele, ind) => this.renderChat(ele, ind))}
          </View>
          <Text style={general.subHeader}>Notifications</Text>
          <View style={[general.standardHMargin, general.flexColumn]}>
            {!filteredNotifications.length ? <Text style={styles.noneMessage}>You have no notifications</Text> : null}
            {filteredNotifications.map((ele, ind) => this.renderNotification(ele, ind))}
          </View>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('StartChat')} style={styles.startChat} underlayColor={commonColor.touchableUnderlay}>
            <WrapperIcon family="MaterialIcons" ios="chat" android="chat" name="chat" style={styles.startChatIcon}/>
          </TouchableHighlight>
        </Content>
      </Container>
    )
  }
}

export default Messages
