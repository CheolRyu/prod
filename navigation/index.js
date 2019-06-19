import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

//import all files to present from screens
import Welcome from '../screens/Welcome';
// import Login from '../screens/Login';
// import Explore from '../screens/Explore';
// import Signup from '../screens/Signup';
// import Profile from '../screens/Profile';
// import Setting from '../screens/Setting';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';

import { theme } from '../constants';

const screens = createStackNavigator(
  {
    //setting up a default navigation styles for all pages.
    Welcome
    // Login,
    // Signup,
    // Profile,
    // Setting,
    // Explore,
    // Browse,
    // Product
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);

export default createAppContainer(screens);
