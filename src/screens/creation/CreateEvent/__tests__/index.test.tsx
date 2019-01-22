import React from "react"
import CreateEvent from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import Group from "types/Group"

const navigation = { navigate: jest.fn() }
const createEvent = jest.fn()
const updateValue = jest.fn()
const group = new Group({})
const title = ''
const about = ''
const directionsParking = ''
const location = ''
const startTime = ''
const endTime = ''
const interests = []
const documents = []
const refresh = jest.fn()
const street = ''
const city = ''
const state = ''
const country = ''

it("renders correctly", () => {
	const tree = renderer.create(<CreateEvent navigation={navigation} createEvent={createEvent} group={group} title={title} about={about} updateValue={updateValue} refresh={refresh}
		directionsParking={directionsParking} street={street} city={city} state={state} country={country} startTime={startTime} endTime={endTime} interests={interests} documents={documents} />).toJSON()
	expect(tree).toMatchSnapshot()
})
