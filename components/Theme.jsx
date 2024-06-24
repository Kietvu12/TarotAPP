import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; 
import { ThemeContext } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataBg from '../data/dataBg';
import styles from './theme.style';


const Theme = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0];
  const [unlockedImages, setUnlockedImages] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [isImagesUnlocked, setIsImagesUnlocked] = useState(false);

  const handleThemeSelection = (index) => {
    if (unlockedImages.includes(index) || index === 0) {
      setSelectedTheme(dataBg[index]);
    }
  };

  const updateTheme = () => {
    if (!selectedTheme) {
      setSelectedTheme(defaultTheme);
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
            const newIsImagesUnlocked = newUnlockedImages.length >= 3 && newUnlockedImages.length <= dataBg.length;
            setIsImagesUnlocked(newIsImagesUnlocked);
            if (newIsImagesUnlocked) {
              const selectedThemeIndex = newUnlockedImages.length - 1;
              setSelectedTheme(dataBg[selectedThemeIndex]);
            }
          }
        } catch (error) {
          console.error('Error checking unlock status from AsyncStorage:', error);
        }
      };
      checkUnlockStatus();
      updateTheme();
    }, [])
  );

  return (
    <View  style={styles.backgroundContainer}>
      <View style={styles.mainContainer}>
        {dataBg.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleThemeSelection(index)} disabled={!isImagesUnlocked && !unlockedImages.includes(index) && index !== 0}>
            <Image source={image} style={[styles.image, { opacity: !isImagesUnlocked && !unlockedImages.includes(index) && index !== 0 ? 0.5 : 1 }]} />
            {
              !unlockedImages.includes(index) && index !== 0 ? (
                <View style={styles.unlockButton}>
                  <Text style={styles.unlockText}>Unlock</Text>
                </View>
              ) : null
            }
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Theme;
