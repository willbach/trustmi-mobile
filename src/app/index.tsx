import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get("window").width

import Signup from 'container/SignupContainer'
import HomeTabs from '../navigators/HomeTabs'
import VerifiedPage from 'container/VerifiedPageContainer'
import Sidebar from 'container/SidebarContainer'
import Mnemonic from 'container/MnemonicContainer'
import Login from 'container/LoginContainer'
import Restore from 'container/RestoreContainer'

const HomeDrawer = createDrawerNavigator(
	{
		HomeTabs: { screen: HomeTabs },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: 'left',
		contentComponent: props => <Sidebar {...props} />,
	}
)

const App = createStackNavigator(
	{
		Login: { screen: Login },
		Restore: { screen: Restore },
		Signup: { screen: Signup },
		Mnemonic: { screen: Mnemonic },
		HomeDrawer: { screen: HomeDrawer },
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
