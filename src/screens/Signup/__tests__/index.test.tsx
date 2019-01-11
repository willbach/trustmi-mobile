import React from "react";
import Signup from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onSignup = jest.fn();
const goToRestore = jest.fn();
const checkForm = jest.fn();
const signupForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<Signup onSignup={onSignup} checkForm={checkForm} signupForm={signupForm} goToRestore={goToRestore} />).toJSON();
	expect(tree).toMatchSnapshot();
});
