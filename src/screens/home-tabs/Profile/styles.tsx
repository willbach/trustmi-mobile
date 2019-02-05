import { StyleSheet } from 'react-native'

import commonColor from 'theme/variables/commonColor'

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
	picAndName: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	profileInfo: {
		paddingVertical: 12,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		marginHorizontal: 16,
	},
	nameCityState: {
		flexDirection: 'column',
		marginLeft: 20,
	},
	name: {
		color: commonColor.brandPrimary,
		fontWeight: '600',
		fontSize: 20,
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
})
export default styles
