import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import HeadingTabNavigation from '../navigation/HeadingTabNavigation'
import styles from './collection.style'
import { useNavigation } from '@react-navigation/native'
import dataBg from '../data/dataBg'
import { ThemeContext} from '../components/ThemeContext'



const Collection = () => {
const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
const defaultTheme = dataBg[0]
useEffect(() => {
  setSelectedTheme(defaultTheme);
}, []); 
const navigation = useNavigation()
  return (
    <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
    <View style={styles.headingContainer}> 
        <View style={styles.backgroundHeadingContainer}> 
          <View style={styles.leftContainer}> 
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../assets/image/back_btn.png')} 
            /> 
            </TouchableOpacity>
            <Text style={styles.titleText}>Collection</Text> 
          </View> 
        </View> 
      </View> 
      <View style={styles.headingTabNavigation}>
        <HeadingTabNavigation/>
      </View>
    </ImageBackground > 
    
  )
}

export default Collection