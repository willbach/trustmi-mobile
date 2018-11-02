import InformationStore from "../InformationStore";
import data from "../../../container/InformationContainer/data";

describe("InformationStore", () => {
	it("should handle FETCH_LIST_SUCCESS", () => {
		const store = new InformationStore();
		store.fetchItems(data);
		const expectedArray = [
			"React Native Starter Kit",
			"React Navigation",
			"NativeBase Easy Grid",
			"NativeBase",
			"CodePush",
			"Redux",
		];
		var actualJSON = JSON.stringify(store.items);
		var expectedJSON = JSON.stringify(expectedArray);
		expect(expectedJSON).toEqual(actualJSON);
	});
});
