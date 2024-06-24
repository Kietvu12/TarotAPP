import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Collection, Diary, Home, Memories, Setting } from '../screens'
import { NavigationContainer, useIsFocused } from '@react-navigation/native'


const Tab = createBottomTabNavigator();

const screensOption = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        elevation: 0,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 40,
        bottom: 20,
        right: 8,
        left: 8,
        borderTopWidth: 0, 
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screensOption}>
        <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon:({focused}) => {
          return(
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image 
              source = {require('../assets/image/home.png')} 
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}

              />
              <Text style={{fontFamily: "title", color: "#ffffff", fontSize: 12}}>Home</Text>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
      name='Memories'
      component={Memories}
      options={{
        tabBarIcon:({focused}) => {
          return(
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image 
              source = {require('../assets/image/memories.png')} 
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
              />
              <Text style={{fontFamily: "title", color: "#ffffff", fontSize: 12}}>Memories</Text>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
      name='Diary'
      component={Diary}
      options={{
        tabBarIcon:({focused}) => {
          return(
            <View>
              <Image 
              source = {require('../assets/image/diary.png')} 
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
              />
              <Text style={{fontFamily: "title", color: "#ffffff", fontSize: 12}}>Diary</Text>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
      name='Collection'
      component={Collection}
      options={{
        tabBarIcon:({focused}) => {
          return(
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image 
              source = {require('../assets/image/star.png')} 
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
              />
              <Text style={{fontFamily: "title", color: "#ffffff", fontSize: 12}}>Collection</Text>
            </View>
          )
        }
      }}
      />
       <Tab.Screen
      name='Setting'
      component={Setting}
      options={{
        tabBarIcon:({focused}) => {
          return(
            <View style={{alignItems: "center", justifyContent: "center"}}>
              <Image 
              source = {require('../assets/image/setting.png')} 
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}

              />
              <Text style={{fontFamily: "title", color: "#ffffff", fontSize: 12}}>Setting</Text>
            </View>
          )
        }
      }}
      />
    </Tab.Navigator>
      
  )
}

export default BottomTabNavigation
