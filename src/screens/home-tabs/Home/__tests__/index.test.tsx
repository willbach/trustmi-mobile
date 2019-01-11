import React from "react";
import Home from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const groups = []
const availableGroups = []
const events = []
const profileCompletion = 50

it("renders correctly", () => {
	const tree = renderer.create(<Home navigation={navigation} groups={groups} availableGroups={availableGroups} events={events} profileCompletionPercentage={profileCompletion}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
