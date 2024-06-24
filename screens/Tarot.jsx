import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './tarot.style';
import dataTarot from '../data/dataTarot';
const data = dataTarot
const Tarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showChoosingImage, setShowChoosingImage] = useState(true);
  const handleCardSelect = async () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!selectedCard) {
      const currentTime = new Date().getTime();
      const cardsHistory = await AsyncStorage.getItem('cardsHistory');
      let updatedHistory = cardsHistory ? JSON.parse(cardsHistory) : [];
      
      updatedHistory.push({
        card: data[randomIndex],
        time: currentTime
      });
      setSelectedCard(data[randomIndex]);
      setShowChoosingImage(false);

      try {
        await AsyncStorage.setItem('cardsHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error('Error saving data to AsyncStorage: ', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cardsHistory = await AsyncStorage.getItem('cardsHistory');
      if (cardsHistory) {
        const updatedHistory = JSON.parse(cardsHistory);
        console.log('Data retrieved from AsyncStorage:');
        updatedHistory.forEach(item => {
          console.log(item.card.name);
          console.log(item.card.meaning);
        });
        const lastTime = updatedHistory[updatedHistory.length - 1].time;
        if (currentTime - lastTime <= 0.01) {
          const lastCard = updatedHistory[updatedHistory.length - 1].card;
          setSelectedCard(lastCard);
          setShowChoosingImage(false);
          console.log('Success');
        }
      }
    };
    fetchData();
  }, []);

  return (
    <ImageBackground style={styles.backgroundContainer}
      source={require("../assets/image/tarot_bg.png")}
      resizeMode='cover'
    >
      <View style={styles.tarotContainer}>
        {showChoosingImage ? (
          <TouchableOpacity onPress={handleCardSelect}>
            <Image source={require("../assets/image/tarot_choosing.png")} />
          </TouchableOpacity>
        ) : null}
      </View>
      {selectedCard && (
         <View style={styles.cardInfoContainer}>
         <Image style={styles.imageContainer} source={selectedCard.img} />
         <Text style={{fontFamily:"title", color:"#ffffff"}}>{selectedCard.name}</Text>
         <Text style={{fontFamily:"title", color:"#ffffff"}}>{selectedCard.meaning}</Text>
         </View>
      )}
    </ImageBackground>
  );
};

export default Tarot;