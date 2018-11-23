import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	updateUpdateInterests: {
		color: commonColor.brandPrimary,
		fontSize: 16,
	},
	interest: {
		color: commonColor.white,
		fontSize: 14,
		backgroundColor: commonColor.brandPrimary,
		paddingVertical: 3,
		paddingHorizontal: 6,
		margin: 5,
		borderRadius: 5,
	},
	filteredInterest: {
		width: (width - 40),
		borderBottomColor: commonColor.lightGray,
		borderBottomWidth: 1,
		borderTopColor: commonColor.lightGray,
		borderTopWidth: 1,
	},
	filteredInterestText: {
		fontSize: 20,
		paddingVertical: 8,
	},
	filteredInterestIcon: {
		color: commonColor.brandSecondary,
		fontSize: 30,
		marginTop: 7
	},
	subtext: {
		color: commonColor.mediumGray,
		marginLeft: 5,
	},
})
export default styles
