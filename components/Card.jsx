import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './card.style';
import dataBg from '../data/dataBg';
import { ThemeContext, ThemeProvider } from './ThemeContext';
const Card = () => {
  const [majorArcana, setMajorArcana] = useState([]);
  const [minorArcana, setMinorArcana] = useState([]);
  const [hasData, setHasData] = useState(true);

  const fetchData = async () => {
    const cardsHistory = await AsyncStorage.getItem('cardsHistory');
    if (cardsHistory) {
      const history = JSON.parse(cardsHistory);
      const uniqueMajorArcana = removeDuplicates(history.filter(item => item.card.arcana === 'Major Arcana'), 'name');
      const uniqueMinorArcana = removeDuplicates(history.filter(item => item.card.arcana === 'Minor Arcana'), 'name');
      setMajorArcana(uniqueMajorArcana);
      setMinorArcana(uniqueMinorArcana);
      setHasData(true)
    }
  };
  const removeDuplicates = (arr, key) => {
    const uniqueNames = {};
    const result = arr.filter(item => {
      if (!uniqueNames[item.card[key]]) {
        uniqueNames[item.card[key]] = true;
        return true;
      }
      return false;
    });
    return result;
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0]
  useEffect(() => {
    setSelectedTheme(defaultTheme);
  }, []);

  return (
    <View style={styles.backgroundContainer} >
      <ScrollView style> 
        <View style={styles.cardImageContainer}>
          <Text style={styles.titleType}>Major Arcana</Text>
          <View style={styles.cardImageItem}>
            {majorArcana.map((item, index) => (
              <View style={styles.tarotCardContainer} key={index}>
                <Image source={item.card.img} style={styles.imageItem}/>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.cardImageContainer}>
          <Text style={styles.titleType}>Minor Arcana</Text>
          <View style={styles.cardImageItem}>
            {minorArcana.map((item, index) => (
              <View style={styles.tarotCardContainer} key={index}>
                <Image source={item.card.img} style={styles.imageItem}/>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;