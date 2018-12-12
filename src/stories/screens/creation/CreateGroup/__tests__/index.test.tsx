import React from "react"
import CreateGroup from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

const navigation = { navigate: jest.fn() }
const createGroup = jest.fn()
const updateValue = jest.fn()
const pic = ''
const name = ''
const description = ''
const city = ''
const state = ''
const interests = []

it("renders correctly", () => {
	const tree = renderer.create(<CreateGroup navigation={navigation} createGroup={createGroup} name={name} description={description} city={city} state={state} interests={interests} updateValue={updateValue} profilePic={pic}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
