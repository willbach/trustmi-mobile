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
	createGroup: {
		position: 'absolute',
		right: 15,
		top: 48,
		color: commonColor.brandPrimary,
		fontSize: 14,
	},
	picker: {
		marginHorizontal: 15,
		width: width - 30
	},
	inputUnderline: {
		borderColor: commonColor.brandSecondary,
		marginLeft: 10,
	},
	textInput: {
		paddingLeft: 0,
		marginVertical: -3,
		color: commonColor.brandPrimary
	},
	hintText: {
		fontSize: 12,
		color: commonColor.brandSecondary,
		marginLeft: 10,
		marginBottom: 20,
	},
	lightText: {
		paddingBottom: 8,
		color: commonColor.mediumGray,
		fontSize: 18,
		fontWeight: '100'
	},
	header: {
		color: commonColor.brandPrimary,
		fontSize: 24,
		marginBottom: 10,
		marginLeft: 10,
		fontWeight: 'bold'
	},
	intro: {
		color: commonColor.brandPrimary,
		fontSize: 18,
		marginVertical: 10,
		marginLeft: 10,
		fontWeight: 'bold'
	},
	h2: {
		color: commonColor.brandPrimary,
		fontSize: 20,
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 10,
		fontWeight: 'bold'
	},
	button: {
		width: width / 2,
		marginTop: 20,
		marginLeft: width / 4,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	dateColumn: {
		width: width / 2,
		flexDirection: 'column',
	},
	datePicker: {
		marginBottom: 20,
	},
})
export default styles
