import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons = {
  Home: require('../assets/img/icons/ihome.png'),
  Booking: require('../assets/img/icons/ibooking.png'),
  Settings: require('../assets/img/icons/isettings.png'),
  Profile: require('../assets/img/icons/iprofile.png'),
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons[route.name as keyof typeof icons]}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? '#275EFE' : 'gray',
            }}
            resizeMode="contain"
          />
        ),
        tabBarActiveTintColor: '#275EFE',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ tabBarLabel: 'Book' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Akun' }}
      />
    </Tab.Navigator>
  );
}
