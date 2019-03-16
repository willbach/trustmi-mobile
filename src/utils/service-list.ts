export const servicesByCategory = {
	Educational: [
		{ name: "University Transcript", service: 'universityTranscript' },
		{ name: "Alumni Email", service: 'alumniEmail' },
		{ name: "College Board (SAT)", service: 'collegeBoard' },
		{ name: "High School Transcript", service: 'highschoolTranscript' },
		{ name: "IQ Test", service: 'iq' },
		{ name: "ACT", service: 'act' },
	],
	Financial: [
		{ name: "Mint", service: 'mint' },
		{ name: "Credit Karma", service: 'creditKarma' },
	],
	Lifestyle: [
		{ name: "Mint", service: 'mint' },
		{ name: "Airline Status", service: 'airlineStatus' },
		{ name: "Hotel Status", service: 'hotelStatus' },
		{ name: "AirBnB", service: 'airbnb' },
		{ name: "Hotels.com", service: 'hotels.com' },
		{ name: "Booking.com", service: 'booking.com' },
	],
	Physical: [
		{ name: "Coral Health", service: 'coralHealth' },
	],
	Professional: [
		{ name: "Pay Stub", service: 'payStub' },
		{ name: "Company Email", service: 'companyEmail' },
		{ name: "Professional Certifications", service: 'professionalCertifications' }
	],
	Veteran: [
		{ name: "Marine Corps", service: 'marineCorps' },
		{ name: "Army", service: 'army' },
		{ name: "Navy", service: 'navy' },
		{ name: "Airforce", service: 'airforce' },
		{ name: "Coast Guard", service: 'coastGuard' },
	]
}

export const serviceList = Object.keys(servicesByCategory).reduce((acc, category) => acc.concat(servicesByCategory[category]), [])
