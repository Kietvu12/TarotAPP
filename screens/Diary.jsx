import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 
import React, { useContext, useEffect, useState } from 'react' 
import styles from './diary.style' 
import Moon from '../components/Moon' 
import AsyncStorage from '@react-native-async-storage/async-storage' 
import images from '../data/data'
import dataBg from '../data/dataBg'
import { ThemeContext, ThemeProvider } from '../components/ThemeContext'
import { MoodContext } from '../components/MoodContext'
import { useNavigation } from '@react-navigation/native'

const Diary = () => { 
  // const clearAllData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log('Async Storage đã được xóa hết.');
  //   } catch (e) {
  //     console.error('Lỗi khi xóa dữ liệu trong Async Storage:', e);
  //   }
  // };
  
  // clearAllData();
  const navigation = useNavigation()
  const [isMuted, setIsMuted] = useState(false); 
  const handleToggleMute = () => { 
    setIsMuted(prevState => !prevState); 
  }; 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [selectedImage, setSelectedImage] = useState('');  
  const handleDone = async () => { 
    try { 
      const entry = { 
        title: title, 
        content: content, 
        selectedImage: selectedImage, 
        date: new Date() 
      }; 
      let entries = await AsyncStorage.getItem('diaryEntries'); 
      entries = entries ? JSON.parse(entries) : []; 
      entries.push(entry); 
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(entries)); 
      setTitle('');
      setContent('');
      navigation.navigate('Memories');
    } catch (error) { 
      console.error('Error saving entry:', error); 
    } 
  }; 
  const handleImageSelect = (index) => { 
    setSelectedImage(index); 
    AsyncStorage.setItem('selectedImageIndex', index.toString()); 
  }; 
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
      if (!selectedTheme) {
          setSelectedTheme(defaultTheme);
      }
  }, [selectedTheme]);
  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;
  useEffect(() => {
    if (!selectedMood) {
      setSelectedMood(defaultMood);
    }
  }, []);
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
            <Text style={styles.titleText}>Diary</Text> 
          </View> 
          <TouchableOpacity onPress={handleDone}> 
            <View style={styles.rightContainer}> 
              <Image source={require("../assets/image/done.png")} style={styles.imageStyle} /> 
            </View> 
          </TouchableOpacity> 
        </View> 
      </View> 
      <View style={styles.moonOptionContainer}> 
  <Moon imageUrl={selectedMood} handleImageSelect={handleImageSelect} /> 
  <TextInput placeholder='Title' value={title} multiline={true}
    onChangeText={setTitle} placeholderTextColor="#ffffff" style={[styles.mainContentText, {textAlignVertical: 'top'}]}></TextInput> 
  <Image source={require("../assets/image/Vector 1.png")} /> 
  <TextInput placeholder='Content' value={content} multiline={true} numberOfLines={4}
    onChangeText={setContent} placeholderTextColor="#ffffff" style={[styles.mainContentText, {textAlignVertical: 'top'}]}></TextInput> 
</View>
    </ImageBackground > 
  ) 
} 
export default Diary 