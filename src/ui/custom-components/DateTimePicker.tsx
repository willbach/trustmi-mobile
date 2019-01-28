import React from 'react'
import { View, Dimensions, Platform, TimePickerAndroid, DatePickerIOS } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Input, Item } from 'native-base'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import moment from 'moment'

import BlurModal from 'ui/custom-components/BlurModal'

import Event from 'types/Event'

import commonColor from 'theme/variables/commonColor'
import general from 'theme/general'
import GetImage from './GetImage'
import MembersDisplay from './MembersDisplay'

const { width, height } = Dimensions.get('window')
const styles: any = {
  dateStyle: {
    paddingLeft: 16,
    fontSize: 18,
  },
  timeStyle: {
    paddingLeft: 16,
    fontSize: 18,
  },
  inputBorder: {
    borderBottomWidth: 0,
    width: 40,
  },
  textInput: {
    width: 40,
    fontSize: 16,
  },
  selectButton: {
		marginVertical: 20,
		alignSelf: 'center',
		width: 140,
		justifyContent: 'center',
	},
	modalBody: {
		width: width - 30,
		alignSelf: 'center',
		position: 'absolute',
		top: 60,
		backgroundColor: commonColor.white,
		paddingVertical: 20,
		borderRadius: 20
  },
}

export interface Props {
  onDateChange: (date: Date) => void
  containerStyle?: any
  dateStyle?: any
  timeStyle?: any
}

export interface State {
  date: Date
  calendarVisible: boolean
}

export default class DateTimePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      calendarVisible: false
    }

    this.changeDate = this.changeDate.bind(this)
    this.setDateAndroid = this.setDateAndroid.bind(this)
    this.setDateIos = this.setDateIos.bind(this)
    this.closeCalendar = this.closeCalendar.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.updateDateTime = this.updateDateTime.bind(this)
  }

  changeDate() {
    this.setState({ calendarVisible: true })
  }

  closeCalendar() {
    this.setState({ calendarVisible: false })
  }

  setDateAndroid(incomingDate: any) {
    const oldDate = this.state.date
    const newDate = new Date(incomingDate.dateString)
    const year = newDate.getUTCFullYear()
    const month = newDate.getMonth()
    const day = newDate.getDate() + 1
    const hours = oldDate.getHours()
    const minutes = oldDate.getMinutes()
    this.setState({ date: new Date(year, month, day, hours, minutes, 0, 0) })
    this.closeCalendar()
    this.updateDateTime()
  }

  setDateIos(date: any) {
    this.setState({ date })
    this.closeCalendar()
    this.updateDateTime()
  }

  async changeTime() {
    if (Platform.OS === 'ios') {
      this.setState({ calendarVisible: true })
    } else {
      try {
        const { action, hour, minute } = await TimePickerAndroid.open({
          hour: 12,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          const oldDate = this.state.date
          const year = oldDate.getUTCFullYear()
          const month = oldDate.getMonth()
          const day = oldDate.getDate()
          this.setState({ date: new Date(year, month, day, hour, minute, 0, 0) })
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message)
      }
    }
  }

  updateDateTime() {
    const { props: { onDateChange }, state: { date } } = this
    onDateChange(date)
  }

  render() {
    const { props: { containerStyle, dateStyle, timeStyle }, state: { date, calendarVisible } } = this

    return <View style={[general.flexColumn, containerStyle]}>
      <Text style={[styles.dateStyle, dateStyle]} onPress={this.changeDate}>{moment(date).format('M/D/YYYY')}</Text>
      <Text style={[styles.timeStyle, timeStyle]} onPress={this.changeTime}>{moment(date).format('h:mm:ss A')}</Text>

      <BlurModal visible={calendarVisible} onRequestClose={this.closeCalendar} transparent blurType="light" blurAmount={10}>
        <View style={[general.centeredColumn, styles.modalBody]}>
          {Platform.OS === 'ios' ? 
          <DatePickerIOS date={date} onDateChange={this.setDateIos} /> :
          <Calendar minDate={new Date()} onDayPress={this.setDateAndroid} />}
          
          <Button style={[styles.selectButton, general.centeredColumn]} onPress={this.closeCalendar}><Text>{Platform.OS === 'ios' ? 'Done' : 'Cancel'}</Text></Button>
        </View>
      </BlurModal>
    </View>
  }
}
