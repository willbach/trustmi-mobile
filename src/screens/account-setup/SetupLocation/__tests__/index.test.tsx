import React from 'react'
import SetupLocation from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { City } from '../../../../types/';

const submitLocation = jest.fn()
const location = new City({})

it('renders correctly', () => {
	const tree = renderer.create(<SetupLocation submitLocation={submitLocation} location={location} navigation={{}} />).toJSON()
	expect(tree).toMatchSnapshot()
})
