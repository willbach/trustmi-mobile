import React from "react"
import Search from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const navigation = { navigate: jest.fn() }
const groups = []
const availableGroups = []
const interests = []
const availableInterests = []
const city = 'Medford'
const state = 'MA'
const sortEventsByInterest = (interests: string[]) => []

it("renders correctly", () => {
	const tree = renderer.create(<Search navigation={navigation} interests={interests} groups={groups} availableGroups={availableGroups} availableInterests={availableInterests} eventsByInterest={sortEventsByInterest(interests)} location={`${city}, ${state}`} />).toJSON()
	expect(tree).toMatchSnapshot()
})
