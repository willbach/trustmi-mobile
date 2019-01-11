import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { height, width } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	uploadButton: {
		marginVertical: 20,
		alignSelf: 'center'
	},
	selectButton: {
		marginVertical: 20,
		alignSelf: 'center',
		width: 140,
		justifyContent: 'center',
	},
	modalBody: {
		width: 280,
		alignSelf: 'center',
		position: 'absolute',
		bottom: 40,
		backgroundColor: commonColor.white,
		paddingVertical: 20,
		borderRadius: 20
	},
})
export default styles
