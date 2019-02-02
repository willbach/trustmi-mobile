import * as React from 'react'
import { Image, Platform } from 'react-native'
import { Text, View, Header, Body } from 'native-base'

import commonColor from 'theme/variables/commonColor'
import generalStyle from 'theme/general'

const styles = {
  logoContainer: {
		marginTop: 40,
	},
	logo: {
		height: 60,
		width: 60,
		marginRight: 20,
	},
	logoText: {
		height: 41,
		width: 160
	}
}

export interface Props {
  size?: string
}

export default class LogoHeader extends React.Component<Props> {
  constructor(props) {
    super(props)

    if (!props.size) {
      props.size = 'large'
    }
  }

  render() {
    return <Header style={{ height: 100 }}>
      <Body style={{ alignItems: 'center' }}>
        <View style={[generalStyle.flexRowCenter, styles.logoContainer]}>
          <Image source={require('images/logo-transparent-small.png')} style={styles.logo} />
          <Image source={require('images/logo-text-white.png')} style={styles.logoText} />
        </View>
        <View padder>
          <Text style={{ color: Platform.OS === 'ios' ? commonColor.black : commonColor.white }} />
        </View>
      </Body>
    </Header>
  }
} 
