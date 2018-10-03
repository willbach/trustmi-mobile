import React from "react";
import Login from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onLogin = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Login onLogin={onLogin} />).toJSON();
	expect(tree).toMatchSnapshot();
});
