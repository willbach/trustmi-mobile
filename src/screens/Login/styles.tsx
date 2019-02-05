import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const deviceHeight = Dimensions.get('window').height

const styles: any = StyleSheet.create({
	pinpadContainer: {
		paddingHorizontal: 30,
		backgroundColor: commonColor.brandPrimary,
	},
	pinpadText: {
		color: commonColor.white
	},
	pinpadHeader: {
		color: commonColor.white
	},
	pinpadHollow: {
		borderColor: commonColor.white
	},
	pinpadSolid: {
		borderColor: commonColor.white,
		backgroundColor: commonColor.white,
	},
})
export default styles
