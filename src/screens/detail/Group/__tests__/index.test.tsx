import React from "react"
import GroupDetail from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import Group from "types/Group"

const navigation = { navigate: jest.fn() }
const group = new Group({})

it("renders correctly", () => {
	const tree = renderer.create(<GroupDetail navigation={navigation} group={group}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
