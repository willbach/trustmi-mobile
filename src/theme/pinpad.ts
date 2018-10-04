import { StyleSheet } from 'react-native'
import commonColor from 'theme/variables/commonColor';

export default StyleSheet.create({
  numpad: {
    marginTop: 15,
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    height: 70,
    width: '33%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backspace: {
    height: 50,
    width: 50,
    marginTop: '10%',
    marginRight: '12%'
  },
  number: {
    fontSize: 50,
    color: commonColor.brandSecondary
  },
  text: {
    fontSize: 20,
    color: commonColor.brandSecondary,
    textAlign: 'center'
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
    color: commonColor.brandSecondary,
    textAlign: 'center',
    fontWeight: '100'
  },
  pinCircleRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },
  pinCircleSolid: {
    margin: 10,
    borderWidth: 3,
    borderColor: commonColor.brandSecondary,
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: commonColor.brandSecondary
  },
  pinCircleHollow: {
    margin: 10,
    borderWidth: 3,
    borderColor: commonColor.brandSecondary,
    borderRadius: 20,
    height: 20,
    width: 20,
    backgroundColor: 'transparent'
  }
})