import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { nativeID } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes'
import styles from './memories.style'
import MemoriesMainView1 from '../components/MemoriesMainView1'
import MemoriesMainView2 from '../components/MemoriesMainView2'
import { useNavigation } from '@react-navigation/native'
import dataBg from '../data/dataBg'
import { ThemeContext, ThemeProvider } from '../components/ThemeContext'

const Memories = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [showMainView1, setShowMainView1] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(prevState => !prevState);
    setShowMainView1(prevState => !prevState);

  };
  const navigation = useNavigation()
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
      if (!selectedTheme) {
          setSelectedTheme(defaultTheme);
      }
  }, [selectedTheme]);
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
            <Text style={styles.textTitle}>Memories</Text>
          </View>
          <TouchableOpacity onPress={handleToggleMute}>
            <View style={styles.rightContainer}>
              <Image source={isMuted ? require("../assets/image/date_range.png") : require("../assets/image/list.png")} style={styles.imageStyle} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainMemoriesContainer}>
        {showMainView1 ? <MemoriesMainView1 /> : <MemoriesMainView2 />}
      </View>
    </ImageBackground>

  )
}


export default Memories

