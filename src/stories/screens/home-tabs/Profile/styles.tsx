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
	profileInfo: {
		paddingTop: 50,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: commonColor.lightGray,
		marginBottom: 10,
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
})
export default styles
