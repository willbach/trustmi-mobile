import * as React from "react"
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base"
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from 'theme/variables/commonColor'

import HomeScreen from 'container/HomeContainer'
import GroupsScreen from 'container/GroupsContainer'
import InformationScreen from 'container/InformationContainer'

export default createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Groups: GroupsScreen,
    Information: InformationScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if (tintColor === null) {
          tintColor = ''
        }
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`
        } else if (routeName === 'Groups') {
          iconName = `ios-people${focused ? '' : '-outline'}`
        } else if (routeName === 'Information') {
          iconName = `ios-paper${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} style={{color: Colors.brandSecondary}} />
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: false,
      style: { backgroundColor: Colors.brandPrimary },
      indicatorStyle: { backgroundColor: Colors.brandSecondary },
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
//       <Container style={styles.container}>
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
