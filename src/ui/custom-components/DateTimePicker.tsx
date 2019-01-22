import React from 'react'
import { View, TouchableHighlight, ScrollView, Dimensions } from 'react-native'
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
  inputBorder: {
    borderBottomWidth: 0,
    width: 40,
  },
  textInput: {
    width: 40,
    fontSize: 16,
  },
  ampm: {
    paddingTop: 14
  },
  colon: {
    paddingTop: 12
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
  date: string
  hours?: string
  minutes?: string
  ampm: string
  calendarVisible: boolean
}

export default class DateTimePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      date: moment().format('M/D/YYYY'),
      ampm: 'AM',
      calendarVisible: false
    }

    this.changeDate = this.changeDate.bind(this)
    this.setDate = this.setDate.bind(this)
    this.closeCalendar = this.closeCalendar.bind(this)
    this.changeAmpm = this.changeAmpm.bind(this)
    this.setHours = this.setHours.bind(this)
    this.setMinutes = this.setMinutes.bind(this)
    this.updateDateTime = this.updateDateTime.bind(this)
  }

  changeDate() {
    this.setState({ calendarVisible: true })
  }

  closeCalendar() {
    this.setState({ calendarVisible: false })
  }

  setHours(value: string) {
    const hours = value.replace(/[^0-9]/g, '')
    this.setState({ hours })
    this.updateDateTime()
  }

  setMinutes(value: string) {
    const minutes = value.replace(/[^0-9]/g, '')
    console.log(value, 'MINUTES', minutes)
    this.setState({ minutes })
    this.updateDateTime()
  }

  setDate(date: any) {
    this.setState({ date: moment(date.dateString).format('M/D/YYYY') })
    this.closeCalendar()
    this.updateDateTime()
  }

  changeAmpm() {
    this.setState({ ampm: this.state.ampm === 'AM' ? 'PM' : 'AM' })
    this.updateDateTime()
  }

  updateDateTime() {
    const { props: { onDateChange }, state: { date, hours, minutes, ampm } } = this
    onDateChange(new Date(`${date} ${hours}:${minutes} ${ampm}`))
  }

  render() {
    const { props: { containerStyle, dateStyle, timeStyle }, state: { date, hours, minutes, ampm, calendarVisible } } = this

    return <View style={[general.flexColumn, containerStyle]}>
      <Text style={[styles.dateStyle, dateStyle]} onPress={this.changeDate}>{date}</Text>

      <Form style={general.flexRow}>
        <Item style={styles.inputBorder}>
          <Input style={styles.textInput} placeholder='00' value={hours} maxLength={2} onChangeText={this.setHours} keyboardType="numeric" />
        </Item>
        <Text style={styles.colon}>:</Text>
        <Item style={styles.inputBorder}>
          <Input style={styles.textInput} placeholder='00' value={minutes} maxLength={2} onChangeText={this.setMinutes} keyboardType="numeric" />
        </Item>
        <Text onPress={this.changeAmpm} style={styles.ampm}>{ampm}</Text>
      </Form>

      <BlurModal visible={calendarVisible} onRequestClose={this.closeCalendar} transparent blurType="light" blurAmount={10}>
        <View style={[general.centeredColumn, styles.modalBody]}>
          <Calendar minDate={new Date()} onDayPress={this.setDate} />
          <Button style={[styles.selectButton, general.centeredColumn]} onPress={this.closeCalendar}><Text>Cancel</Text></Button>
        </View>
      </BlurModal>
    </View>
  }
}
