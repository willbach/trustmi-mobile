import React from "react";
import Events from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Group from 'types/Group'

const navigation = { navigate: jest.fn() };
const group = new Group({})
const userId = '12345'

it("renders correctly", () => {
	const tree = renderer.create(<Events userId={userId} navigation={navigation} group={group}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
