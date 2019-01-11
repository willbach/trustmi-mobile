import React from "react"
import CreateGroup from "../index"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import City from "types/City";

const navigation = { navigate: jest.fn() }
const createGroup = jest.fn()
const updateValue = jest.fn()
const pic = ''
const name = ''
const about = ''
const city = new City({})
const interests = []
const refresh = jest.fn()

it("renders correctly", () => {
	const tree = renderer.create(<CreateGroup location={city} refresh={refresh} navigation={navigation} createGroup={createGroup} name={name} about={about} interests={interests} updateValue={updateValue} profilePic={pic}/>).toJSON()
	expect(tree).toMatchSnapshot()
})
