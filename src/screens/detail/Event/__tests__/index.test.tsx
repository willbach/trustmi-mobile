import React from "react";
import EventDetail from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Event from 'types/Event'

const navigation = { navigate: jest.fn() };
const event = new Event({})
const userId = '12345'

it("renders correctly", () => {
	const tree = renderer.create(<EventDetail userId={userId} navigation={navigation} event={event}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
