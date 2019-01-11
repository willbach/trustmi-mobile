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
	createGroup: {
		position: 'absolute',
		right: 15,
		top: 48,
		color: commonColor.brandPrimary,
		fontSize: 14,
	},
	noneMessage: {
		color: commonColor.mediumGray,
		marginLeft: 15
	}
})
export default styles
