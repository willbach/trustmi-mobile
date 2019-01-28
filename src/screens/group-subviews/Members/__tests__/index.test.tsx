import React from "react"
import Members from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const navigation = { navigate: jest.fn() }
const members = []

it("renders correctly", () => {
	const tree = renderer.create(<Members userId={''} navigation={navigation} members={members} groupId={''} groupName={''} eventId={''} eventTitle={''} />).toJSON()
	expect(tree).toMatchSnapshot()
})
