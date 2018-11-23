import ProfileStore from "../ProfileStore"
import data from "../../../container/InformationListContainer/data"

describe("ProfileStore", () => {
	it("should handle FETCH_LIST_SUCCESS", () => {
		const store = new ProfileStore()
		store.fetchItems(data.Veteran)
		const expectedArray = [
			"React Native Starter Kit",
			"React Navigation",
			"NativeBase Easy Grid",
			"NativeBase",
			"CodePush",
			"Redux",
		]
		var actualJSON = JSON.stringify(store.items)
		var expectedJSON = JSON.stringify(expectedArray)
		expect(expectedJSON).toEqual(actualJSON)
	})
})
