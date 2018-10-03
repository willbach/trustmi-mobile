import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get("window").width

import Signup from '../container/SignupContainer'
import Home from '../container/HomeContainer'
import BlankPage from '../container/BlankPageContainer'
import Sidebar from '../container/SidebarContainer'

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
		Signup: { screen: Signup },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: 'Signup',
		headerMode: 'none',
	}
)

export default () => (
	<Root>
		<App />
	</Root>
)
