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
	interestHeader: {
		fontSize: 16,
		color: commonColor.brandPrimary,
	},
	miniHeader: {
		fontSize: 18,
		color: commonColor.brandPrimary
	},
	interestFilter: {
		fontSize: 16,
		paddingHorizontal: 8,
		paddingVertical: 4,
		backgroundColor: commonColor.brandPrimary,
		color: commonColor.white,
		marginRight: 10,
		marginTop: 10,
		borderRadius: 10,
	},
	seeAll: {
		fontSize: 16,
		color: commonColor.brandSecondary
	},
	interestCategory: {
		marginBottom: 10,
		marginTop: 5,
	},
	interestImage: {
		width: (width - 45)/2,
		height: (width - 45)/2.5,
		backgroundColor: commonColor.brandSecondary,
	},
	arrowForward: {
		fontSize: 20,
		color: commonColor.brandSecondary,
		marginTop: 3,
		marginLeft: 6,
	},
	event: {
		width: (width - 45)/2.5,
		height: (width - 45)/3.5,
		marginRight: 15,
	},
	eventImage: {
		width: (width - 45)/2.5,
		height: (width - 45)/3.5,
		zIndex: 1,
		position: 'absolute',
		backgroundColor: commonColor.brandPrimary,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 1, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 2.5,
	},
	eventText: {
		fontSize: 12,
		color: commonColor.white,
		marginBottom: 2,
		marginHorizontal: 5,
		zIndex: 10
	},
	seeMoreIcon: {
		fontSize: 80,
		color: commonColor.brandSecondary,
		marginTop: 16,
		marginHorizontal: 30,
	},
	searchBar: {
		paddingVertical: 10,
		margin: 0,
		borderBottomWidth: 0,
		width: width - 120,
		marginLeft: -20
	},
	searchIcon: {
		color: commonColor.white,
	},
	searchInput: {
		color: commonColor.white,
		width: 200,
	},
	selectButton: {
		marginVertical: 20,
		alignSelf: 'center',
		width: 140,
		justifyContent: 'center',
	},
	modalBody: {
		width: width - 30,
		alignSelf: 'center',
		position: 'absolute',
		top: 40,
		backgroundColor: commonColor.white,
		paddingVertical: 20,
		borderRadius: 20
	},
})
export default styles
