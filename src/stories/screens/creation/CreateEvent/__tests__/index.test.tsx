import React from "react"
import CreateEvent from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const navigation = { navigate: jest.fn() }
const createEvent = jest.fn()
const groupId = '2124543654t3'

it("renders correctly", () => {
	const tree = renderer.create(<CreateEvent navigation={navigation} createEvent={createEvent} groupId={groupId}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
