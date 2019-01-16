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

export const formatDate = (date: string) : string => {
  const cleanDate = date.replace(/[^0-9\/]/, '').replace(/\/\//, '/')

  const correctFormat = cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[1-2][0-9]|3[01])\/\d{3}$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[1-2][0-9]|3[01])\/\d{2}$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[1-2][0-9]|3[01])\/\d{1}$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[1-2][0-9]|3[01])\/$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[1-2][0-9]|3[01])$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/[0-3]$/) ||
    cleanDate.match(/^(0[1-9]|1[012])\/$/) ||
    cleanDate.match(/^(0[1-9]|1[012])$/) ||
    cleanDate.match(/^[0-1]$/)

  if (cleanDate.match(/^(0[1-9]|1[012])[0-3]$/)) {
    return `${cleanDate.slice(0,2)}/${cleanDate.slice(-1)}`
  } else if (cleanDate.match(/^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])[0-9]$/)) {
    return `${cleanDate.slice(0,5)}/${cleanDate.slice(-1)}`
  } else if (correctFormat) {
    return cleanDate
  } else {
    return cleanDate.slice(0, -1)
  }
}

export const formatZip = (zip: string) => zip.replace(/^[0-9]/, '')

export const formatMemberCount = (count: number) : string => {
  if (count > 999) {
    return `${count / 1000}K`
  }

  return count.toString()
}

export const formatEventTime = (time: Date) => moment(time).format('ddd, MMM Do, h:mm A')
