import * as React from 'react'
import { Modal, findNodeHandle, View } from 'react-native'
import { BlurView } from 'react-native-blur'
import commonColor from 'theme/variables/commonColor'

const styles: any = {
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0
  },
  background: {
    backgroundColor: commonColor.darkGray,
    opacity: 0.8,
  }
}

export interface Props {
  visible: boolean
  transparent?: boolean
  onRequestClose: () => void
  blurType: 'light' | 'dark' | 'xlight'
  blurAmount: number
}

export interface State {
  viewRef: any
}

export default class BlurModal extends React.Component<Props, State> {
  backgroundView: any

  constructor(props) {
    super(props)

    this.state = { viewRef: null }
  }

  render() {
    const { visible, onRequestClose, blurType, blurAmount, transparent } = this.props

    return <Modal visible={visible} onRequestClose={onRequestClose} transparent={transparent}>
      <View style={[styles.absolute, styles.background]} />
      {/* <BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType={blurType} blurAmount={blurAmount} /> */}
      {this.props.children}
    </Modal>
  }
}
