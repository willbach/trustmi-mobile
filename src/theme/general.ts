import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

import commonColor from 'theme/variables/commonColor'

const general: any = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
		backgroundColor: commonColor.white,
	},
  whiteFlex: {
    flex: 1,
    backgroundColor: commonColor.white
  },
  brandBackground: {
    backgroundColor: commonColor.brandPrimary
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  centeredRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowWrapStart: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexRowWrapBetween: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flexRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexRowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexColumn: {
    flexDirection: 'column'
  },
  stretch: {
    marginRight: 15,
    flex: 1
  },
  flexGrow: {
    flexGrow: 1
  },
  view: {
    backgroundColor: commonColor.white
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  centeredColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  endColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  fullHeight: {
    minHeight: height
  },
  fullWidth: {
    width
  },
  betweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyHMargin: {
    marginHorizontal: 4
  },
  smallHMargin: {
    marginHorizontal: 8
  },
  standardHMargin: {
    marginHorizontal: 16
  },
  largeHMargin: {
    marginHorizontal: 32
  },
  standardLMargin: {
    marginLeft: 16,
  },
  tinyTopMargin: {
    marginTop: 4
  },
  smallTopMargin: {
    marginTop: 8
  },
  mediumTopMargin: {
    marginTop: 20
  },
  largeTopMargin: {
    marginTop: 32
  },
  smallBottomMargin: {
    marginBottom: 8
  },
  mediumBottomMargin: {
    marginBottom: 20
  },
  largeBottomMargin: {
    marginBottom: 32
  },
  smallVMargin: {
    marginVertical: 8
  },
  iosTopMargin: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  spaceBelow: {
    paddingBottom: 40
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  spaceBelowM: {
    paddingBottom: 20
  },
  h2: {
    color: commonColor.brandPrimary,
    fontWeight: 'bold',
		fontSize: 20,
		marginTop: 40,
		marginBottom: 5,
		padding: 2,
		marginHorizontal: 15
  },
  h3: {
    color: commonColor.brandPrimary,
    fontWeight: 'bold',
		fontSize: 18,
		marginTop: 10,
		marginHorizontal: 15
  },
  lightGrayDivider: {
    borderBottomColor: commonColor.lightGray,
		borderBottomWidth: 2,
  },
  brandPrimaryDivider: {
    borderBottomColor: commonColor.brandPrimary,
		borderBottomWidth: 2,
  },
  brandSecondaryDivider: {
    borderBottomColor: commonColor.brandSecondary,
		borderBottomWidth: 2,
  },
  row: {
    borderBottomColor: commonColor.brandPrimary,
    borderBottomWidth: 1,
    width
  },
} as any)

export default general
