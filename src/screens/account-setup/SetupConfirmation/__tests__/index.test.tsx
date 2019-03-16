import React from 'react'
import ConfirmationCode from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const confirmCode = jest.fn()
const checkForm = jest.fn()
const codeForm = React.Component
const resendCode = jest.fn()

it('renders correctly', () => {
	const tree = renderer.create(<ConfirmationCode codeForm={codeForm} confirmCode={confirmCode} checkForm={checkForm} resendCode={resendCode} />).toJSON()
	expect(tree).toMatchSnapshot()
})
