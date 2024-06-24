import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './setting.style'
import { ThemeContext, ThemeProvider } from '../components/ThemeContext'
import dataBg from '../data/dataBg'
import { useNavigation } from '@react-navigation/native'
import Slider from '@react-native-community/slider';

const Setting = () => {
  const navigation = useNavigation()
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext)
  const defaultTheme = dataBg[0]
  useEffect(() => {
    setSelectedTheme(defaultTheme)
  }, [])

  const handleVolumeChange = (volume) => {
    // Thực hiện các hành động cập nhật âm lượng ở đây
  }

  return (
    <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
      <View style={styles.headingContainer}>
        <View style={styles.backgroundHeadingContainer}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/image/back_btn.png')} />
            </TouchableOpacity>
            <Text style={styles.textTitle}>Setting</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.container_1}>
          <Image style={{top: 7}} source={require("../assets/image/control.png")}/>
          <Text style={styles.title}>Control</Text>
        </View>
        <Text style={styles.itemText}>Music</Text>
        <Slider
          style={styles.slider}
          maximumValue={50}
          minimumValue={20}
          step={1}
          orientation="vertical"
          // thumbStyle={{ height: 400, width: 1000, backgroundColor: 'transparent' }}
          thumbImage={require('../assets/image/about_us.png')}
          minimumTrackTintColor="#CCCCCC" 
        />
         <View style={styles.container_1}>
          <Image style={{top: 7}} source={require("../assets/image/about_us.png")}/>
          <Text style={styles.title}>About Us</Text>
        </View>
        <Text style={styles.itemText}>How to use</Text>
        <View style={styles.social}>
        <Text style={{fontFamily:"title", fontSize: 15, color:"#ffffff"}}>Facebook</Text>
        <Text style={{fontFamily:"title", fontSize: 15, color:"#ffffff"}}>Instagram</Text>
        </View>
      </View>
      
    </ImageBackground>
  )
}

export default Setting
