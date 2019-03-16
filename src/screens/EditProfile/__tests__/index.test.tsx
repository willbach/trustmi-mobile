import React from 'react'
import Profile from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const navigation = { navigate: jest.fn() }

it('renders correctly', () => {
	const tree = renderer.create(<Profile navigation={navigation} userStore={{ pic: 'your-face.jpg'}} />).toJSON()
	expect(tree).toMatchSnapshot()
})
