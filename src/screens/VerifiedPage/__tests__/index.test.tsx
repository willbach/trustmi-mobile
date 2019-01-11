import React from "react";
import VerifiedPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() }
const getData = jest.fn()
const data = {}

it("renders correctly", () => {
	const tree = renderer.create(<VerifiedPage navigation={navigation} data={data} getData={getData} />).toJSON();
	expect(tree).toMatchSnapshot();
});
