import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { width, height } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	promptText: {
		marginHorizontal: 20,
		marginTop: 24,
	},
	buttonRow: {
		display: 'flex',
		flexDirection: 'row',
		marginVertical: 30,
	},
	skip: {
		marginTop: 10,
		marginLeft: 20,
		color: commonColor.darkGray,
		textDecorationLine: 'underline',
	},
	continue: {
		marginLeft: width / 2 - 90,
	},
	serviceRow: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 20,
	},
	checkbox: {

	},
	service: {
		marginLeft: 16
	},
})
export default styles
