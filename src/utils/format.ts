import moment from 'moment'

import Chat from 'types/Chat'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const messageDate = (date: Date) => {
  const time = date.toLocaleTimeString()
  const now = new Date()
  const difference = moment(date).diff(now, 'days')

  if (difference > 7) {
    return `${MONTHS[date.getMonth()]} ${date.getDate()} at ${time.slice(0, -6) + time.slice(-3)}`
  } else {
    return moment(date).fromNow()
  }
}

export const formatMsgPreview = (chat: Chat) : string => chat.members.length <= 2 ? chat.messages[0].text : `${chat.messages[0].author.split(' ')[0]}: ${chat.messages[0].text}`
