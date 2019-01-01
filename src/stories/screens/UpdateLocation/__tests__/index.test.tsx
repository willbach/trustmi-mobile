import React from "react"
import UpdateLocation from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import City from "types/City"

const goBack = jest.fn()
const changeLocation = jest.fn()
const location = new City({})
const availableLocations = []

it("renders correctly", () => {
	const tree = renderer.create(<UpdateLocation goBack={goBack} changeLocation={changeLocation} location={location} currentLocation={location} availableLocations={availableLocations}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
