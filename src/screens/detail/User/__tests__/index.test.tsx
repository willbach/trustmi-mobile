import React from "react";
import UserDetail from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import User from 'types/User'

const navigation = { navigate: jest.fn() };
const user = new User({})
const userId = '12345'

it("renders correctly", () => {
	const tree = renderer.create(<UserDetail userId={userId} navigation={navigation} user={user}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
