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
	linkMessage: {
		marginTop: 16,
		marginLeft: 16,
	},
	sendTo: (active: boolean) : any => ({
		fontSize: 16,
		fontWeight: active ? 'bold' : 'normal',
		width: 100,
		color: active ? commonColor.white : commonColor.brandPrimary,
		borderColor: active ? commonColor.brandPrimary : commonColor.lightGray,
		borderWidth: 2,
		backgroundColor: active ? commonColor.brandPrimary : 'transparent',
		textAlign: 'center',
		paddingVertical: 4,
		marginVertical: 16,
		marginLeft: 16,
		borderRadius: 2,
	}),
})
export default styles
