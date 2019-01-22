import * as React from "react"
import { Icon } from "native-base"
import { createMaterialTopTabNavigator } from 'react-navigation'
import commonColor from 'theme/variables/commonColor'

import HomeScreen from 'container/home-tabs/HomeContainer'
import SearchScreen from 'container/home-tabs/SearchContainer'
import MessagesScreen from 'container/home-tabs/MessagesContainer'
import ProfileScreen from 'container/home-tabs/ProfileContainer'

export default createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Messages: MessagesScreen,
    Profile: ProfileScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`
        } else if (routeName === 'Messages') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`
        }

        return <Icon name={iconName} style={{color: commonColor.brandSecondary}} />
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: { backgroundColor: commonColor.brandPrimary },
      indicatorStyle: { backgroundColor: commonColor.brandSecondary },
    },
  }
)
