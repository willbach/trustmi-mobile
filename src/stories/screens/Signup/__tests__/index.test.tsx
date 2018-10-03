import React from "react";
import Signup from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onSignup = jest.fn();
const signupForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<Signup onSignup={onSignup} signupForm={signupForm} />).toJSON();
	expect(tree).toMatchSnapshot();
});
