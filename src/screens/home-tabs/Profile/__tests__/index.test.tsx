import React from 'react'
import Profile from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const navigation = { navigate: jest.fn() }
const updateUser = jest.fn();
const editProfile = jest.fn()
const id = ''
const first = ''
const last = ''
const city = ''
const state = ''
const linkedinUrl = ''
const title = ''
const companyName = ''
const userPurpose = ''
const userType = ''
const userIntro = ''
const financials = []
const skills = []
const certifications = []
const positions = []
const tests = []
const schools = []

it('renders correctly', () => {
	const tree = renderer.create(<Profile navigation={navigation} editProfile={editProfile} updateUser={updateUser} id={id} first={first} last={last} city={city} state={state} linkedinUrl={linkedinUrl} title={title} companyName={companyName} userPurpose={userPurpose} userType={userType} userIntro={userIntro} financials={financials} skills={skills} certifications={certifications} positions={positions} tests={tests} schools={schools} />).toJSON()
	expect(tree).toMatchSnapshot()
})
