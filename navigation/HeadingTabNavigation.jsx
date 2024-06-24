import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mood from '../components/Mood';
import Card from '../components/Card';
import Theme from '../components/Theme';


const Tab = createMaterialTopTabNavigator();
const screensOption = {
  tabBarShowLabel: true,
    tabBarHideOnKeyboard: true,
    headerShown: true,
    tabBarStyle: {
      right: 8,
      left: 8,
      backgroundColor: 'transparent',
      elevation: 0, 
      shadowOpacity: 0, 
    },
    tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: 'title',
      color: '#ffffff',
      textAlign: 'center', 
      textTransform: 'none'
    },
    tabBarIndicatorStyle: {
      backgroundColor: 'white',
    },
}

const HeadingTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screensOption} sceneContainerStyle={{ backgroundColor: 'transparent' }}>
      <Tab.Screen
      name="Mood"
      component={Mood} />
      <Tab.Screen 
      name="Card" 
      component={Card} />
      <Tab.Screen 
      name="Theme" 
      component={Theme} />
    </Tab.Navigator>
  );
}

export default HeadingTabNavigation