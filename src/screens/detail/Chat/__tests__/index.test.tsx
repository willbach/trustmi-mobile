import React from "react"
import ChatDetail from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import Chat from "types/Chat"
import Group from "types/Group"

const navigation = { navigate: jest.fn() }
const chat = new Chat({})
const group = new Group({})

it("renders correctly", () => {
	const tree = renderer.create(<ChatDetail navigation={navigation} chat={chat} group={group}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
