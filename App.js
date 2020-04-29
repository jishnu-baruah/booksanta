import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import DonorScreen from './screens/DonorScreen';
import RequestScreen from './screens/RequestScreen';
import WelcomeScreen from './screens/welcomeScreen';


export default class App extends React.Component {
  render() {
    return (
      <WelcomeScreen />
      // <AppContainer />

    );
  }
}


// const TabNavigator = createBottomTabNavigator({
//   Donor: { screen: DonorScreen },
//   Request: { screen: RequestScreen },
// },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: () => {
//         const routeName = navigation.state.routeName;

//         if (routeName === "Transaction") {
//           return (
//             <Image
//               source={require("./assets/book.png")}
//               style={{ width: 40, height: 40 }}
//             />
//           )

//         }
//         else if (routeName === "Search") {
//           return (
//             <Image
//               source={require("./assets/searchingbook.png")}
//               style={{ width: 40, height: 40 }}
//             />)

//         }
//       }
//     })
//   }
// );
const SwitchNavigator = createSwitchNavigator({
  // WelcomeScreen: { screen: WelcomeScreen },
  // TabNavigator: { screen: TabNavigator }

})

// const AppContainer = createAppContainer(SwitchNavigator);


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'red',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
