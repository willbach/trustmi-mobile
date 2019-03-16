import React from 'react'
import VerifyIdentity from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const submitIdentity = jest.fn()
const identityForm = jest.fn()
const checkForm = jest.fn()
const canSubmit = true
const selfieVideo = {}
const storeSelfieVideo = jest.fn()

it('renders correctly', () => {
	const tree = renderer.create(<VerifyIdentity submitIdentity={submitIdentity} identityForm={identityForm} checkForm={checkForm} canSubmit={canSubmit} selfieVideo={selfieVideo} storeSelfieVideo={storeSelfieVideo} />).toJSON()
	expect(tree).toMatchSnapshot()
})
