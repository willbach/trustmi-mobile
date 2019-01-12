import { Dimensions, StyleSheet } from 'react-native'
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
	noneMessage: {
		fontSize: 16,
		color: commonColor.brandPrimary,
	},
	item: {
		paddingVertical: 5,
		// borderTopColor: commonColor.lightGray,
		// borderTopWidth: 1,
		// borderBottomColor: commonColor.lightGray,
		// borderBottomWidth: 1,
	},
	itemImage: {
		width: (width - 50) / 7,
		height: (width - 50) / 7,
		margin: 3,
		marginRight: 10,
		backgroundColor: commonColor.brandPrimary,
	},
	chatImageRounding: {
		borderRadius: (width - 60) / 7,
	},
	itemTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		width: (width - 30) / 7 * 5,
	},
	itemText: {
		fontSize: 14,
		width: (width - 30) / 7 * 5,
	},
	dateText: {
		fontSize: 12,
		color: commonColor.mediumGray,
		width: (width - 30) / 7 * 5,
	},
	startChat: {
		position: 'absolute',
		bottom: 5,
		right: 10,
		backgroundColor: commonColor.brandSecondary,
		borderRadius: 30,
		width: 60,
		height: 60,
	},
	startChatIcon: {
		fontSize: 36,
		color: commonColor.white,
		marginTop: 14,
		marginLeft: 12,
	},
	newItemIndicator: {
		backgroundColor: commonColor.brandSecondary,
		width: (width - 60) / 7 / 3,
		height: (width - 60) / 7 / 3,
		position: 'absolute',
		top: 0,
		left: 0,
		borderRadius: (width - 60) / 7 / 3,
	},
})
export default styles
