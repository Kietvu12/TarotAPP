import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './memoriesMainView1.style';
import { MoodContext } from './MoodContext';
import Moon from './Moon';

const MemoriesMainView1 = ({ }) => {
  const images = [
    {
      types: "Moon",
      urls: [
        require("../assets/image/Moon/moon1.png"),
        require("../assets/image/Moon/moon2.png"),
        require("../assets/image/Moon/moon3.png"),
        require("../assets/image/Moon/moon4.png"),
        require("../assets/image/Moon/moon5.png"),
      ]
    },
    {
      types: "Anime",
      urls: [
        require("../assets/image/Anime/1.jpg"),
        require("../assets/image/Anime/2.jpg"),
        require("../assets/image/Anime/3.jpg"),
        require("../assets/image/Anime/4.jpg"),
        require("../assets/image/Anime/5.jpg"),
      ]
    }
  ];

  const navigation = useNavigation();
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [entriesByMonth, setEntriesByMonth] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [marginTopValue, setMarginTopValue] = useState(10);
  const [indexFilter, setIndexFilter] = useState(null);

  const handleDropdownPress = () => {
    setShowDropdown(!showDropdown);
    setMarginTopValue(showDropdown ? 10 : 40);
  };

  const fetchDiaryEntries = async () => {
    try {
      const entries = await AsyncStorage.getItem('diaryEntries');
      if (entries) {
        const parsedEntries = JSON.parse(entries).map(entry => {
          const entryDate = new Date(entry.date);
          const day = entryDate.getDate();
          const month = entryDate.toLocaleString('default', { month: 'long' });
          const year = entryDate.getFullYear();
          const hour = entryDate.getHours();
          const minutes = entryDate.getMinutes();
          return { ...entry, day, month, year, hour, minutes };
        });
        setDiaryEntries(parsedEntries);
      } else {
        setDiaryEntries([]);
      }
    } catch (error) {
      console.error('Error fetching diary entries:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchDiaryEntries);
    fetchDiaryEntries();
    return unsubscribe;
  }, []);

  useEffect(() => {
    const entriesByMonth = {};
    diaryEntries.forEach(entry => {
      const { month } = entry;
      entriesByMonth[month] = entriesByMonth[month] ? [...entriesByMonth[month], entry] : [entry];
    });
    setEntriesByMonth(entriesByMonth);
  }, [diaryEntries]);

  const navigateToImageDetail = (entry) => {
    navigation.navigate('DetailNote', { entry: entry });
  };

  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;

  const handleImageSelect = (index) => {
    setIndexFilter(index);
  };

  const clearFilter = () => {
    setIndexFilter(null);
  };

  useEffect(() => {
    if (!selectedMood) {
      setSelectedMood(defaultMood);
    }
  }, [selectedMood]);

  return (
    <ScrollView style={styles.mainMemoriesContainer}>
      <View style={styles.dropDownMenuContainer}>
        <Pressable onPress={handleDropdownPress}>
          <View style={styles.dropDownMenuItem}>
            <Text style={{ fontFamily: "title", color: "#ffffff" }}>Flash Back</Text>
            <Image style={styles.dropDownMenuImageIcon} source={require('../assets/image/tri.png')} />
          </View>
        </Pressable>
        {showDropdown && (
          <View style={styles.dropDownMenuSelect}>
            <ScrollView vertical={true}>
              <Moon imageUrl={selectedMood} handleImageSelect={handleImageSelect} />
            </ScrollView>
          </View>
        )}
      </View>
      {showDropdown && (
        <View style={styles.dropDownMenuClearContainer}>
          <TouchableOpacity onPress={clearFilter}>
            <Text style={{ fontFamily: "title", color: "#ffffff" }}>Clear Filter</Text>
          </TouchableOpacity>
        </View>
      )}
      {Object.keys(entriesByMonth).map(month => (
        <View style={{ marginTop: marginTopValue, zIndex: 2, alignItems: "center" }} key={month}>
          <Text style={{ fontFamily: "title", color: "white", fontSize: 20, justifyContent: "center" }}>
            {month} {entriesByMonth[month][0].year}
          </Text>
          <View style={styles.imageContainer}>
            {entriesByMonth[month].map((entry, index) => {
              if (indexFilter === null || indexFilter === entry.selectedImage) {
                return (
                  <TouchableOpacity key={index} onPress={() => navigateToImageDetail(entry)}>
                    <View style={styles.itemContainer}>
                      <Image source={selectedMood[entry.selectedImage]} />
                      <Text style={{ fontFamily: "title", color: "white", fontSize: 8, justifyContent: "center" }}>{entry.day}</Text>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MemoriesMainView1;
