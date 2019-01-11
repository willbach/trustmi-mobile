import React from "react";
import InformationList from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<InformationList navigation={navigation} title="Veteran" list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
