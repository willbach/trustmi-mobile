import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get("window").width

import Signup from 'container/SignupContainer'
import Home from 'container/HomeContainer'
import VerifiedPage from 'container/VerifiedPageContainer'
import Sidebar from 'container/SidebarContainer'
import Mnemonic from 'container/MnemonicContainer'
import Login from 'container/LoginContainer'
import Restore from 'container/RestoreContainer'

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: 'left',
		contentComponent: props => <Sidebar {...props} />,
	}
)

const App = StackNavigator(
	{
		Login: { screen: Login },
		Restore: { screen: Restore },
		Signup: { screen: Signup },
		Mnemonic: { screen: Mnemonic },
		Drawer: { screen: Drawer },
		VerifiedPage: { screen: VerifiedPage },
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
	}
)

export default () => (
	<Root>
		<App />
	</Root>
)
