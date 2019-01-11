import React from "react";
import Mnemonic from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const next = jest.fn();
const copy = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Mnemonic nextScreen={next} copy={copy} mnemonic={'bob lob law lobs law bomb bob lob law lobs law bomb'}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
