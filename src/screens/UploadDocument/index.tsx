import * as React from 'react'
import { Container, Content, Header, Body, Title, Button, Text, Icon, Left, Right, Form, Item, Input, View } from 'native-base'
import ImagePicker from 'react-native-image-crop-picker'
import ImageSelector from 'ui/custom-components/ImageSelector'
import BlurModal from 'ui/custom-components/BlurModal'

import general from 'theme/general'
import styles from './styles'
import { NAME_MAX_LENGTH, DATE_LENGTH, GPA_LENGTH, SEX_LENGTH, STATE_LENGTH, ZIP_LENGTH, COUNTRY_LENGTH, DOCUMENT_NAMES } from 'theme/constants'
import { formatZip, formatDate } from 'utils/format'

export interface Props {
  goBack: () => void
  submit: (data: any) => void
  type: string // drivers passport payStub transcript
  first: string
  last: string
  middle: string
  sex: string
  birthDate: string
  city: string
  state: string
  zip: string
  country: string
}

export interface State {
  first: string
  last: string
  middle: string
  sex: string
  birthDate: string
  street1: string
  street2: string
  city: string
  state: string
  zip: string
  country: string
  expirationDate: string
  graduationDate: string
  gpa: string
  university: string
  payDate: string
  company: string
  photo: string
  mime: string
  generalFormError?: string
  showModal: boolean
}

export default class UploadDocument extends React.Component<Props, State> {
	constructor(props) {
    super(props)

    this.state = {
      first: props.first,
      last: props.last,
      middle: props.middle,
      sex: props.sex,
      birthDate: props.birthDate,
      street1: '',
      street2: '',
      city: props.city,
      state: props.state,
      zip: props.zip,
      country: props.country,
      expirationDate: '',
      university: '',
      gpa: '',
      graduationDate: '',
      company: '',
      payDate: '',
      photo: '',
      mime: '',
      showModal: false
    }

    this.submit = this.submit.bind(this)
    this.getPhoto = this.getPhoto.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal() {
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  async submit() {
    const { props: { type, submit }, state: { first, last, middle, sex, birthDate, street1, street2, city, state, zip, country, expirationDate, university, gpa, graduationDate, company, payDate, photo } } = this
    try {
      await submit({ type, first, last, middle, sex, birthDate, street1, street2, city, state, zip, country, expirationDate, university, gpa, graduationDate, company, payDate, file: photo })
    } catch (error) {
      console.log('ERROR UPLOADING DOCUMENT', error)
    }
  }

  async getPhoto(useCamera: boolean) {
    const options = { width: 300, height: 400, cropping: true, includeBase64: true }
    try {
      let image
      if (useCamera) {
        image = await ImagePicker.openCamera(options)
      } else {
        image = await ImagePicker.openPicker(options)
      }

      const { mime, data } = image
      this.setState({ photo: data, mime, generalFormError: undefined, showModal: false })
    } catch (error) {
      console.log('ERROR WITH IMAGE PICKER', error)
    }
  }

	render() {
    const { props: { type, goBack }, state: { first, last, middle, sex, birthDate, street1, street2, city, state, zip, country, expirationDate,
      university, gpa, graduationDate, company, payDate, mime, photo, showModal } } = this

    // drivers passport payStub transcript
    const inputs = [
      { value: first, placeholder: 'First Name', onChange: (first) => this.setState({ first }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers', 'passport', 'payStub', 'transcript' ] },
      { value: middle, placeholder: 'Middle Name', onChange: (middle) => this.setState({ middle }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers', 'passport', 'payStub', 'transcript' ] },
      { value: last, placeholder: 'Last Name', onChange: (last) => this.setState({ last }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers', 'passport', 'payStub', 'transcript' ] },
      { value: sex, placeholder: 'Sex', onChange: (sex) => this.setState({ sex: sex.toUpperCase() }), maxLength: SEX_LENGTH, releventTypes: [ 'drivers', 'passport' ] },
      { value: birthDate, placeholder: 'Date of Birth (MM/DD/YYYY)', onChange: (birthDate) => this.setState({ birthDate: formatDate(birthDate) }), maxLength: DATE_LENGTH, releventTypes: [ 'drivers', 'passport', 'transcript' ] },
      { value: street1, placeholder: 'Street Address 1', onChange: (street1) => this.setState({ street1 }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers' ] },
      { value: street2, placeholder: 'Street Address 2', onChange: (street2) => this.setState({ street2 }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers' ] },
      { value: city, placeholder: 'City', onChange: (city) => this.setState({ city }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'drivers' ] },
      { value: state, placeholder: 'State', onChange: (state) => this.setState({ state: state.toUpperCase() }), maxLength: STATE_LENGTH, releventTypes: [ 'drivers' ] },
      { value: zip, placeholder: 'Zip Code', onChange: (zip) => this.setState({ zip: formatZip(zip) }), maxLength: ZIP_LENGTH, releventTypes: [ 'drivers' ] },
      { value: country, placeholder: 'Country', onChange: (country) => this.setState({ country: country.toUpperCase() }), maxLength: COUNTRY_LENGTH, releventTypes: [ 'drivers', 'passport' ] },
      { value: expirationDate, placeholder: 'Expiration Date (MM/DD/YYYY)', onChange: (expirationDate) => this.setState({ expirationDate: formatDate(expirationDate) }), maxLength: DATE_LENGTH, releventTypes: [ 'drivers', 'passport' ] },
      { value: university, placeholder: 'University', onChange: (university) => this.setState({ university }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'transcript' ] },
      { value: gpa, placeholder: 'GPA', onChange: (gpa) => this.setState({ gpa }), maxLength: GPA_LENGTH, releventTypes: [ 'transcript' ] },
      { value: graduationDate, placeholder: 'Graduation Date (MM/DD/YYYY)', onChange: (graduationDate) => this.setState({ graduationDate: formatDate(graduationDate) }), maxLength: DATE_LENGTH, releventTypes: [ 'transcript' ] },
      { value: company, placeholder: 'Company', onChange: (company) => this.setState({ company }), maxLength: NAME_MAX_LENGTH, releventTypes: [ 'payStub' ] },
      { value: payDate, placeholder: 'Pay Date (MM/DD/YYYY)', onChange: (payDate) => this.setState({ payDate: formatDate(payDate) }), maxLength: DATE_LENGTH, releventTypes: [ 'payStub' ] },
    ]

    const documentImage = photo ? { uri: `data:${mime};base64,${photo}` } : undefined
    const documentName = DOCUMENT_NAMES[type]

    return (
      <Container style={general.container}>
        <Header>
          <Left>
            <Button onPress={goBack} transparent>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{`Verify ${documentName}`}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            {inputs.map((input: any, ind: number) => {
              const { value, placeholder, onChange, maxLength, releventTypes } = input

              // ref={(input) => { this.textInput4 = input }}
              //                       returnKeyType = { "next" }
              //                       onSubmitEditing={() => { this.textInput5.focus() }}

              if ( releventTypes.includes(type) ) {
                return (<Item key={ind} style={styles.inputUnderline}>
                  <Input style={styles.textInput} placeholder={placeholder} value={value} maxLength={maxLength} onChangeText={onChange} />
                </Item>)
              } else {
                return null
              }
            })}

            <View style={general.centeredColumn}>
              <ImageSelector onPress={this.showModal} image={documentImage} caption={`Select ${documentName}`} icon="ios-camera" />
            </View>

            <Button onPress={this.submit} style={styles.uploadButton}><Text>{`Verify ${documentName}`}</Text></Button>
          </Form>
          <BlurModal visible={showModal} onRequestClose={this.closeModal} transparent blurType="light" blurAmount={10}>
            <View style={[general.centeredColumn, styles.modalBody]}>
              <Button style={[styles.selectButton, general.centeredColumn]} onPress={() => this.getPhoto(true)}><Text>Take a photo</Text></Button>
              <Button style={[styles.selectButton, general.centeredColumn]} onPress={() => this.getPhoto(false)}><Text>Select a file</Text></Button>
              <Button style={[styles.selectButton, general.centeredColumn]} onPress={this.closeModal}><Text>Cancel</Text></Button>
            </View>
          </BlurModal>
        </Content>
      </Container>
    )
	}
}
