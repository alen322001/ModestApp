import React, {ReactNode} from 'react';

import LoginView from './src/views/LoginView/LoginView';
import {NavigationContainer} from '@react-navigation/native';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import HomeView from './src/views/HomeView/HomeView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeTabBarIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}): ReactNode => (
  <MaterialCommunityIcons name="home" color={color} size={size} />
);

const LoginTabBarIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}): ReactNode => (
  <MaterialCommunityIcons name="lock" color={color} size={size} />
);

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  const tabBarOptionsHome: BottomTabNavigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: HomeTabBarIcon,
  };

  const tabBarOptionsLogin: BottomTabNavigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: LoginTabBarIcon,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={LoginView}
          options={tabBarOptionsLogin}
        />
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={tabBarOptionsHome}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
