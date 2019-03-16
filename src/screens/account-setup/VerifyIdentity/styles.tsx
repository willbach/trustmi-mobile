import { Dimensions, StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor'

const { width, height } = Dimensions.get('window')

const styles: any = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: commonColor.white,
	},
	uploadButton: {
		marginVertical: 20,
		alignSelf: 'center'
	},
	selectButton: {
		marginTop: 20,
		alignSelf: 'center',
		width: 140,
		justifyContent: 'center',
	},
	modalBody: {
		width: width - 40,
		alignSelf: 'center',
		position: 'absolute',
		bottom: 40,
		backgroundColor: commonColor.white,
		paddingVertical: 20,
		borderRadius: 20
	},
	preview: {
		width: width - 60,
		height: (width - 60) * 1.25,
	},
	checkmark: {
		fontSize: 20,
		color: commonColor.white
	}
})
export default styles
