import React from 'react'
import SetupObjectives from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const submitObjectives = jest.fn()
const setUserType = jest.fn()
const setUserPurpose = jest.fn()
const setUserIntro = jest.fn()

it('renders correctly', () => {
	const tree = renderer.create(<SetupObjectives submitObjectives={submitObjectives} setUserType={setUserType} setUserPurpose={setUserPurpose} setUserIntro={setUserIntro} userIntro="" />).toJSON()
	expect(tree).toMatchSnapshot()
})
