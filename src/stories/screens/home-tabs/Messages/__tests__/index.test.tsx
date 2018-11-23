import React from "react"
import Messages from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const navigation = { navigate: jest.fn() }
const chats = []
const notifications = []

it("renders correctly", () => {
	const tree = renderer.create(<Messages navigation={navigation} chats={chats} notifications={notifications} />).toJSON()
	expect(tree).toMatchSnapshot()
})
