import * as React from "react"
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base"
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
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

// import styles from "./styles"
// export interface Props {
//   navigation: any
//   list: any
// }
// export interface State {}
// class Home extends React.Component<Props, State> {
//   render() {
//     return (
//       <Container style={general.container}>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon active name="menu" onPress={() => this.props.navigation.navigate("DrawerOpen")} />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Home</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <List>
//             {this.props.list.map((item, i) => (
//               <ListItem
//                 key={i}
//                 onPress={() =>
//                   this.props.navigation.navigate("VerifiedPage", { name: item.name, service: item.service})}
//               >
//                 <Text>{item.name}</Text>
//               </ListItem>
//             ))}
//           </List>
//         </Content>
//       </Container>
//     )
//   }
// }
