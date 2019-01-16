import { StyleSheet } from 'react-native'

import commonColor from 'theme/variables/commonColor'

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: commonColor.white,
	},
	groupTitle: {
		fontSize: 20,
		color: commonColor.brandPrimary
	},
	about: {
		marginHorizontal: 16,
	},
	location: {

	},
	link: {
		color: commonColor.brandSecondary,
		marginLeft: 16,
	}
})
export default styles
