import React from "react";
import Signup from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onSignup = jest.fn();
const goToRecover = jest.fn();
const checkForm = jest.fn();
const signupForm = React.Component;
const takePhotoId = jest.fn()
const takeSelfie = jest.fn()
const photoIdTaken = false
const selfieTaken = false

it("renders correctly", () => {
	const tree = renderer.create(<Signup onSignup={onSignup} checkForm={checkForm} signupForm={signupForm} goToRecover={goToRecover} takePhotoId={takePhotoId} takeSelfie={takeSelfie} photoIdTaken={photoIdTaken} selfieTaken={selfieTaken} />).toJSON();
	expect(tree).toMatchSnapshot();
});
