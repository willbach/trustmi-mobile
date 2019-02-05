import React from "react";
import Profile from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const getAge = jest.fn();
const interests = []

it("renders correctly", () => {
	const tree = renderer.create(<Profile getAge={getAge} navigation={navigation} profileData={{ pic: "your-face.jpg"}} interests={interests}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
