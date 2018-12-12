import React from "react";
import EventDetail from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Event from 'types/Event'
import Group from 'types/Group'

const navigation = { navigate: jest.fn() };
const event = new Event({})
const group = new Group({})

it("renders correctly", () => {
	const tree = renderer.create(<EventDetail navigation={navigation} event={event} group={group}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
