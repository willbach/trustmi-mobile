import React from "react"
import UpdateInterests from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const goBack = jest.fn()
const addInterest = jest.fn()
const removeInterest = jest.fn()
const interests = []
const availableInterests: any = {}
const title = 'Update Interests'
const origin = 'group'

it("renders correctly", () => {
	const tree = renderer.create(<UpdateInterests goBack={goBack} addInterest={addInterest} removeInterest={removeInterest} interests={interests} availableInterests={availableInterests}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
