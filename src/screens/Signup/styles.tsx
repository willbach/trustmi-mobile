import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

const deviceHeight = Dimensions.get('window').height

const styles: any = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: commonColor.white,
	},
	shadow: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	bg: {
		flex: 1,
		marginTop: deviceHeight / 1.75,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30,
		bottom: 0,
	},
	input: {
		marginBottom: 20,
	},
	btn: {
		marginTop: 20,
		alignSelf: 'center',
	},
	checkmark: {
		color: commonColor.white,
		fontSize: 24,
		fontWeight: 'bold',
		marginRight: 0,
	},
	photoButton: {
		marginTop: 12,
		width: (width - 60) / 2,
		justifyContent: 'center',
	},
	photoButtonText: {
		paddingRight: 0,
		paddingLeft: 0,
	},
	infoTextButton: {
		fontSize: 14,
		color: commonColor.brandPrimary,
		textAlign: 'center',
		textDecorationLine: 'underline',
		marginBottom: 12,
	},
	selectButton: {
		marginTop: 40,
		alignSelf: 'center',
		width: 140,
		justifyContent: 'center',
	},
	modalBody: {
		width: width - 60,
		alignSelf: 'center',
		position: 'absolute',
		top: (height / 2) - 160,
		backgroundColor: commonColor.white,
		paddingVertical: 30,
		borderRadius: 10
	},
	infoText: {
		marginHorizontal: 20,
		fontSize: 14,
		color: commonColor.brandPrimary,
	},
	termsRow: {
		maxWidth: width - 16,
		marginTop: 8,
		marginLeft: 4,
	},
	disclaimer: {
		fontSize: width / 30,
		color: commonColor.brandPrimary,
	},
	termsLink: {
		fontSize: width / 30,
		color: commonColor.brandPrimary,
		textDecorationLine: 'underline',
		fontWeight: 'bold',
	},
})
export default styles
