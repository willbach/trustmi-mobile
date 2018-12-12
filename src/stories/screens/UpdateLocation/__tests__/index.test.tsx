import React from "react"
import UpdateLocation from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const goBack = jest.fn()
const changeLocation = jest.fn()
const location = ''
const availableLocations = []

it("renders correctly", () => {
	const tree = renderer.create(<UpdateLocation goBack={goBack} changeLocation={changeLocation} location={location} availableLocations={availableLocations}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
