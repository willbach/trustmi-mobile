import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon, Text, Form, Item, Input, Toast } from 'native-base'
import ProfilePic from 'ui/custom-components/ProfilePic'

import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'
import Announcement from 'types/Announcement'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import { MESSAGE_MAX_LENGTH } from 'theme/constants'

const { width, height } = Dimensions.get('window')

const categories = [ 'Discussion', 'Announcements', 'Events' ]

const styles : any = {
  title: {
    fontSize: 14,
    paddingVertical: 4,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: commonColor.mediumGray,
    width: (width - 4) / categories.length
  },
  row: {
    marginBottom: 4,
    backgroundColor: commonColor.mediumGray,
    borderVerticalColor: commonColor.darkGray,
    borderVerticalWidth: 1,

  }
}

export interface Props {
  navigation: any
  userId: string
  group: Group,
  startDiscussion: (message: string) => void
}

export interface State {
  category: string
  message?: string
}

export default class GroupSelector extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = { category: 'Discussion' }
  }

  writeMessage(message) {
    this.setState({ message })
  }

  async startDiscussion() {
    const { props: { startDiscussion }, state: { message } } = this

    if (message) {
      try {
        await startDiscussion(message)
      } catch (error) {
        console.log('ERROR SENDING MESSAGE IN GROUP DISCUSSION:', error)
        Toast.show({
          type: 'danger',
          text: 'There was an error sending the message, please try again later',
          duration: 2000,
          position: 'bottom',
          textStyle: { textAlign: 'center' },
        })
      }
    }
  }

  renderContent() {
    const { props: { userId, group: { events, announcements, chats } }, state: { category, message } }= this

    if (category === 'Discussion') {
      return <View>
        <View style={general.flexRow}>
          <ProfilePic imageId={userId} size={60}  />
          <Form>
            <Item style={styles.inputUnderline}>
              <Input style={styles.textInput} placeholder='Start a discussion' value={message} maxLength={MESSAGE_MAX_LENGTH} onChangeText={this.writeMessage} />
            </Item>
          </Form>
        </View>
        {chats.map((chat: Chat, ind: number) => this.renderRow(ind, chat.creator.id, `${chat.creator.firstName} ${chat.creator.lastName}`, chat.createdAt, chat.messages[0].text) )}
      </View>
    } else if (category === 'Announcements') {
      return <View>
        {announcements.map((announcement: Announcement, ind: number) => this.renderRow(ind, announcement.id || announcement.creator.id, announcement.name, announcement.createdAt, announcement.text) )}
      </View>
    }

    return <View>
      {events.map((event: Event, ind: number) => this.renderRow(ind, event.id, event.title, event.startTime, event.about) )}
    </View>
  }

  renderRow(ind: number, id: string, title: string, date: Date, text: string) {
    return <View key={ind} style={styles.row}>
      <View style={general.flexRow}>
        <ProfilePic imageId={id} size={30} />
        <View>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.message} numberOfLines={3}>{text}</Text>
    </View>
  }

  render() {
    return <View>
      <View style={general.flexRow}>
        {categories.map((category: string, ind: number) => <Text key={ind} style={styles.title} onPress={() => this.setState({ category })} >{category}</Text>)}
      </View>
      {this.renderContent()}
    </View>
  }
}
