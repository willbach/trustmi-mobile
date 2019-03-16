import { StyleSheet, Dimensions } from 'react-native'

import commonColor from 'theme/variables/commonColor'
const { height, width } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: commonColor.white,
	},
	row: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: 'center',
	},
	mt: {
		marginTop: 18,
	},
	completionBar: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	profileInfo: {
		paddingBottom: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 16,
	},
	picAndName: {
		paddingVertical: 16,
		width
	},
	location: {
		marginTop: 16,
		lineHeight: 16,
		textAlignVertical: 'top'
	},
	waterBackground: {
		width,
		position: 'absolute',
		top: 0,
		opacity: 0.4,
		zIndex: -5
	},
	locationIcon: {
		fontSize: 20,
		color: commonColor.brandPrimary,
		marginRight: 4,
		marginTop: 12
	},
	editButton: {
		position: 'absolute',
		right: 16,
		top: 16,
	},
	editIcon: {
		fontSize: 32,
		color: commonColor.brandPrimary,
	},
	introContainer: {
		width,
	},
	openQuote: {
		position: 'absolute',
		top: 12,
		left: 12,
		fontSize: 32,
		color: commonColor.lightGray,
	},
	closeQuote: {
		position: 'absolute',
		right: 14,
		bottom: 12,
		fontSize: 32,
		color: commonColor.lightGray,
	},
	intro: {
		paddingHorizontal: 54,
		paddingVertical: 16,
	},
	nameCityState: {
		flexDirection: 'column',
		marginLeft: 20,
	},
	userInfo: {
		backgroundColor: commonColor.white
	},
	name: {
		fontSize: 24,
		marginTop: 12,
	},
	entry: {
		width: width - 32,
		marginLeft: 16,
		marginVertical: 4,
		paddingVertical: 4,
		borderBottomColor: commonColor.paleGray,
		borderBottomWidth: 1,
	},
	interestsHeader: {
		borderBottomColor: commonColor.brandSecondary,
		borderBottomWidth: 2,
		marginVertical: 10,
		padding: 2,
		marginHorizontal: 20
	},
	interestsTitle: {
		color: commonColor.brandPrimary,
		fontSize: 20,
		textAlign: 'center'
	},
	updateUpdateInterests: {
		color: commonColor.brandPrimary,
		fontSize: 16,
	},
	arrowIcon: {
		color: commonColor.brandSecondary,
		marginTop: 2,
		marginLeft: 6,
		fontSize: 20,
	},
	headerLogo: {height: 30, width: 30},
	headerText: {height: 24, width: 95, marginLeft: 16, marginTop: 3},
	work: {
		fontWeight: 'bold',
		fontSize: 18
	},
	categoryTitle: {
		marginLeft: 10,
	},
	squareSideBorder: (ind: number) : any => ({
		borderLeftWidth: ind % 2,
		borderLeftColor: commonColor.brandSecondary,
	}),
	dataSection: {
		borderBottomWidth: 1,
		borderBottomColor: commonColor.brandSecondary,
		marginHorizontal: 16,
		marginVertical: 16,
	},
	userType: {
		backgroundColor: 'white',
		paddingVertical: 8,
	},
	userPurpose: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginVertical: 8,
		backgroundColor: commonColor.brandSecondary,
		borderRadius: 8,
		color: commonColor.white,
		fontWeight: 'bold',
	},
	dataItem: {
		fontWeight: 'bold'
	},
	verifiedIcon: {
		fontSize: 20,
		color: commonColor.brandSecondary,
		marginLeft: 4,
		fontWeight: 'bold',
	},
	link: {
		color: commonColor.brandSecondary,
		textDecorationLine: 'underline',
		fontWeight: '100',
	},
	smallLink: {
		color: commonColor.brandSecondary,
		fontSize: 16,
		textDecorationLine: 'underline',
		fontWeight: '100',
	},
})
export default styles
