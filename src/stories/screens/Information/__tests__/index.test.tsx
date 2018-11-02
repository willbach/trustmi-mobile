import React from "react";
import Information from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<Information navigation={navigation} list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
