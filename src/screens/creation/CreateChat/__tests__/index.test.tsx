import React from "react";
import CreateChat from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const createChat = jest.fn()
const groupId = '35134654766587469'

it("renders correctly", () => {
	const tree = renderer.create(<CreateChat navigation={navigation} createChat={createChat} groupId={groupId}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
