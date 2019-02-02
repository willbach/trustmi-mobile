import React from "react";
import Recover from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onRecover = jest.fn();
const goToSignup = jest.fn();
const checkForm = jest.fn();
const restoreForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<Recover goToSignup={goToSignup} checkForm={checkForm} restoreForm={restoreForm} onRecover={onRecover} />).toJSON();
	expect(tree).toMatchSnapshot();
});
