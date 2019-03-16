import React from "react";
import Signup from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onSignup = jest.fn();
const goToRecover = jest.fn();
const signupForm = React.Component;
const hasStoredAccount = false

it("renders correctly", () => {
	const tree = renderer.create(<Signup onSignup={onSignup} signupForm={signupForm} goToRecover={goToRecover} hasStoredAccount={hasStoredAccount} />).toJSON();
	expect(tree).toMatchSnapshot();
});
