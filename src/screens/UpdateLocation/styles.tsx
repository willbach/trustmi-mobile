import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	updateUpdateLocation: {
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
	filteredLocation: {
		width: (width - 40),
		borderBottomColor: commonColor.lightGray,
		borderBottomWidth: 1,
		borderTopColor: commonColor.lightGray,
		borderTopWidth: 1,
	},
	filteredLocationText: {
		fontSize: 20,
		paddingVertical: 8,
	},
	filteredLocationIcon: {
		color: commonColor.brandSecondary,
		fontSize: 30,
		marginTop: 7
	},
	subtext: {
		color: commonColor.mediumGray,
		marginLeft: 5,
	},
	intro: {
		fontSize: 18,
		color: commonColor.brandPrimary,
		marginBottom: 20,
	}
})
export default styles
