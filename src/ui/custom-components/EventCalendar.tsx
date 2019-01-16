import * as React from 'react'
import { Icon, Text } from 'native-base'
import { View, TouchableHighlight, Dimensions } from 'react-native'
import moment from 'moment'
import DateRow from 'ui/components/DateRow'
import GetImage from 'ui/custom-components/GetImage'

import Event from 'types/Event'

import general from 'theme/general'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')
const eventImageWidth = (width - 50) / 7
const styles : any = {
  calendarFilter: (active: boolean) => {
    return { width: width/ 4, height: 30, borderWidth: 1, borderColor: commonColor.lightGray, fontSize: 16, fontWeight: 'bold', color: commonColor.brandPrimary, paddingTop: 4, textAlign: 'center', backgroundColor: active ? commonColor.lightGray : commonColor.white }
  },
  event: { paddingVertical: 5 },
  eventImage: { width: eventImageWidth, height: eventImageWidth, margin: 3, marginHorizontal: 10, backgroundColor: commonColor.brandPrimary, borderRadius: 5 },
  eventName: { fontSize: 14, fontWeight: 'bold', width: eventImageWidth * 5 },
  eventLocation: { fontSize: 14, width: eventImageWidth * 5 },
  eventTime: { fontSize: 12, color: commonColor.mediumGray, width: eventImageWidth * 5 },
  noneMessage: { color: commonColor.mediumGray, paddingVertical: 10, paddingLeft: 10 }
}

export interface Props {
  navigation: any
  events: Event[]
}

export interface State {
  filter: string
}
class EventCalendar extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'ALL'
    }

    this.renderEvent = this.renderEvent.bind(this)
    this.renderEvents = this.renderEvents.bind(this)
    this.renderEventsByDate = this.renderEventsByDate.bind(this)
  }

  renderEventsByDate(events: Event[], day: number) {
    return (
      <View key={day}>
        <DateRow date={moment(events[0] ? events[0].startTime : moment().add(day, 'days')).format('dddd MMM Do')} daysInFuture={day}/>
        {!events.length ? <Text style={styles.noneMessage}>No events</Text> : events.map(this.renderEvent)}
      </View>
    )
  }

  renderEvent(event: Event, ind: number) {
    console.log('SHOULD HAVE A BUNCH OF EVENTS', event)
    if (!event) {
      return
    }
    const dateTimeFormat = this.state.filter === 'PAST' ? 'dddd MMM Do h:mm a' : 'h:mm a'

    return (
      <TouchableHighlight key={ind} onPress={() => this.props.navigation.navigate('Event', { event })} underlayColor={commonColor.touchableUnderlay}>
        <View style={[general.flexRow, styles.event]}>
          <GetImage imageId={event.id} style={styles.eventImage} size={eventImageWidth} />
          <View style={general.flexColumn}>
            <Text style={styles.eventName} numberOfLines={1}>{event.title}</Text>
            <Text style={styles.eventLocation} numberOfLines={1}>{event.location}</Text>
            <Text style={styles.eventTime} numberOfLines={1}>{`${moment(event.startTime).format(dateTimeFormat)} · ${event.groupName}`}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  renderEvents() {
    const { events } = this.props
    const { filter } = this.state

    if (filter === 'PAST') {
      const relevantEvents = events.filter( (event: Event) => (new Date()).getTime() > (new Date(event.startTime)).getTime() )
      return relevantEvents.map(this.renderEvent)
    } else {
      let relevantEvents = events.filter( (event: Event) => moment() < moment(event.startTime) && moment(event.startTime).diff(moment(), 'days') < 7 )
      if (filter === 'GOING') {
        relevantEvents = relevantEvents.filter((event: Event) => event.rsvp === 'GOING')
      } else if (filter === 'SAVED') {
        relevantEvents = relevantEvents.filter((event: Event) => event.saved)
      }

      const futureDays : Event[] [] = [[], [], [], [], [], [], []]
      const sortedEvents = relevantEvents.reduce((acc, event: Event) => {
        const today = moment(moment().format('YYYY-MM-DD'))

        const daysAhead = moment(event.startTime).diff(today, 'days')

        if (!acc[daysAhead]) {
          acc[daysAhead] = []
        }
        acc[daysAhead].push(event)
        console.log('WHERE ARE THE EVENTS', acc)

        return acc
      }, futureDays)

      return sortedEvents.map(this.renderEventsByDate)
    }
  }

  render() {
    return (
      <View style={[general.flexColumn, general.mediumBottomMargin]}>
        <View style={general.flexRow}>
          {['ALL', 'GOING', 'SAVED', 'PAST'].map((filter: string, ind: number) => <Text key={ind} style={styles.calendarFilter(this.state.filter === filter)} onPress={() => this.setState({ filter })}>{filter}</Text>)}
        </View>
        {!this.props.events.length || this.props.events[0] === undefined ? <Text style={styles.noneMessage}>You do not have any upcoming events</Text> : this.renderEvents()}
      </View>
    )
  }
}

export default EventCalendar
