import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get("window").width

import Signup from 'container/SignupContainer'
import ConfirmationCode from 'container/ConfirmationCodeContainer'
import VerifyIdentity from 'container/account-setup/VerifyIdentityContainer'
import SetupLocation from 'container/account-setup/SetupLocationContainer'
import SetupObjectives from 'container/account-setup/SetupObjectivesContainer'
import SetupConfirmation from 'container/account-setup/SetupConfirmationContainer'

import HomeTabs from '../navigators/HomeTabs'
import VerifiedPage from 'container/VerifiedPageContainer'
import Sidebar from 'container/SidebarContainer'
import UpdateInterests from 'container/UpdateInterestsContainer'
import UpdateLocation from 'container/UpdateLocationContainer'
import CreateChat from 'container/creation/CreateChatContainer'
import CreateEvent from 'container/creation/CreateEventContainer'
import CreateGroup from 'container/creation/CreateGroupContainer'
import ChatDetail from 'container/detail/ChatContainer'
import EventDetail from 'container/detail/EventContainer'
import GroupDetail from 'container/detail/GroupContainer'
import UserDetail from 'container/detail/UserContainer'
import Events from 'container/group-subviews/EventsContainer'
import Members from 'container/group-subviews/MembersContainer'
import InformationListPage from 'container/InformationListContainer'
import UploadDocument from 'container/UploadDocumentContainer'
import DataInputPrompt from 'container/DataInputPromptContainer'

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
		Signup: { screen: Signup },
		ConfirmationCode: { screen: ConfirmationCode },
		VerifyIdentity: { screen: VerifyIdentity },
		SetupLocation: { screen: SetupLocation },
		SetupObjectives: { screen: SetupObjectives },
		SetupConfirmation: { screen: SetupConfirmation },

		DataInputPrompt: { screen: DataInputPrompt },

		HomeDrawer: { screen: HomeDrawer },
		UpdateInterests: { screen: UpdateInterests },
		UpdateLocation: { screen: UpdateLocation },
		UploadDocument: { screen: UploadDocument },
		
		VerifiedPage: { screen: VerifiedPage },
		InformationList: { screen: InformationListPage },

		//creation
		CreateChat: { screen: CreateChat },
		CreateEvent: { screen: CreateEvent },
		CreateGroup: { screen: CreateGroup },

		//detail
		Chat: { screen: ChatDetail },
		Event: { screen: EventDetail },
		Group: { screen: GroupDetail },
		User: { screen: UserDetail },

		//group subview
		Events: { screen: Events },
		Members: { screen: Members },
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
