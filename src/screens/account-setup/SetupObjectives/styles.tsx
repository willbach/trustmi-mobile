import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

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
	picker: {
		width: undefined,
		marginHorizontal: 10,
	},
	intro: {
		minHeight: 120,
		textAlignVertical: 'top'
	}
})
export default styles
