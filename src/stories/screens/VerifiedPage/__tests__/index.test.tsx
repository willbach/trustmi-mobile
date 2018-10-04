import React from "react";
import VerifiedPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const verifiedStore = {}
const userStore = {}

it("renders correctly", () => {
	const tree = renderer.create(<VerifiedPage navigation={navigation} userStore={userStore} verifiedStore={verifiedStore} />).toJSON();
	expect(tree).toMatchSnapshot();
});
