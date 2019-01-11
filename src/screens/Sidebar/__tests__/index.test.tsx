import React from "react";
import Sidebar from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const onLogout = jest.fn()

it("renders correctly", () => {
	const tree = renderer.create(<Sidebar navigation={navigation} onLogout={onLogout} />).toJSON();
	expect(tree).toMatchSnapshot();
});
