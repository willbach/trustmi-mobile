import React from "react"
import UploadDocument from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const goBack = jest.fn()
const type = ''
const first = ''
const last = ''
const middle = ''
const sex = ''
const birthDate = ''
const city = ''
const state = ''
const zip = ''
const country = ''
const submit = jest.fn()

it("renders correctly", () => {
	const tree = renderer.create(<UploadDocument goBack={goBack} submit={submit} type={type} first={first} last={last} middle={middle} sex={sex} birthDate={birthDate} city={city} state={state} zip={zip} country={country} />).toJSON()
	expect(tree).toMatchSnapshot()
})
