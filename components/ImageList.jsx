import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodContext } from './MoodContext';
import styles from './imageList.styles';
import { useFocusEffect } from '@react-navigation/native';
const images = 
[
{
    types:"Moon",
    urls: [
    require("../assets/image/Moon/moon1.png"),
    require("../assets/image/Moon/moon2.png"),
    require("../assets/image/Moon/moon3.png"),
    require("../assets/image/Moon/moon4.png"),
    require("../assets/image/Moon/moon5.png"), 
    ]
},
{
    types:"Anime",
    urls: [
    require("../assets/image/Anime/1.jpg"),
    require("../assets/image/Anime/2.jpg"),
    require("../assets/image/Anime/3.jpg"),
    require("../assets/image/Anime/4.jpg"),
    require("../assets/image/Anime/5.jpg"),
    ]
}
]
const ImageList = () => {
  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;
  const [unlockedImages, setUnlockedImages] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [moodUpdated, setMoodUpdated] = useState(false);
  const [isImagesUnlocked, setIsImagesUnlocked] = useState(false);
  const handleMoodSelection = (index) => {
    if (unlockedImages.includes(index) || index === 0) {
      setSelectedMood(images[index].urls);
    }
  };
  const updateMood = () => {
    if (!selectedMood) {
      setSelectedMood(defaultMood);
    }
  };
   useFocusEffect(
    React.useCallback(() => {
      const checkUnlockStatus = async () => {
        try {
          const cardsHistory = await AsyncStorage.getItem('cardsHistory');
          if (cardsHistory) {
            const updatedHistory = JSON.parse(cardsHistory);
            const totalCardsCount = updatedHistory.length;
            const unlockedCount = Math.floor(totalCardsCount / 3);
            let newUnlockedImages = [];
            for (let i = 0; i <= Math.min(unlockedCount, 3); i++) {
              newUnlockedImages.push(i);
            }
            setUnlockedImages(newUnlockedImages);
            setTotalCards(totalCardsCount);
            const newIsImagesUnlocked = newUnlockedImages.length >= 3 && newUnlockedImages.length <= images.urls.length;
            setIsImagesUnlocked(newIsImagesUnlocked);
            if (newIsImagesUnlocked) {
              const selectedMoodIndex = newUnlockedImages.length - 1;
              setSelectedMood(images[selectedMoodIndex].urls);
            }
          }
        } catch (error) {
          console.error('Error checking unlock status from AsyncStorage:', error);
        }
      };
      checkUnlockStatus();
      updateMood(); 
    }, [])
  );
  return (
    <ScrollView>
      {images.map((category, index) => (
        <View key={index}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.types}</Text>
            <TouchableOpacity onPress={() => handleMoodSelection(index)} disabled={!isImagesUnlocked && !unlockedImages.includes(index) && index !== 0}>
              <View style={selectedMood === category.urls ? styles.stateActivedButton : (isImagesUnlocked || unlockedImages.includes(index) || index === 0 ? styles.stateActiveButton : styles.stateLockedButton)}>
                <Text style={selectedMood === category.urls ? styles.activedText : (isImagesUnlocked || unlockedImages.includes(index) || index === 0 ? styles.activeText : styles.lockedText)}>
                  {selectedMood === category.urls ? "Actived" : (isImagesUnlocked || unlockedImages.includes(index) || index === 0 ? "Active" : "Locked")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            {category.urls.map((url, urlindex) => (
              <TouchableOpacity key={urlindex} onPress={() => handleMoodSelection(index)} disabled={!isImagesUnlocked && !unlockedImages.includes(index) && index !== 0}>
                <Image source={url} style={[styles.image, { opacity: !isImagesUnlocked && !unlockedImages.includes(index) && index !== 0 ? 0.5 : 1 }]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
export default ImageList;