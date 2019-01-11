import React from "react";
import Restore from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onRestore = jest.fn();
const goToSignup = jest.fn();
const checkForm = jest.fn();
const restoreForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<Restore goToSignup={goToSignup} checkForm={checkForm} restoreForm={restoreForm} onRestore={onRestore} />).toJSON();
	expect(tree).toMatchSnapshot();
});
