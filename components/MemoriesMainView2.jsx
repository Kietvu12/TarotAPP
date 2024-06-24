import React, { useContext, useEffect, useState } from 'react'; 
import { Image, ScrollView, TouchableOpacity,Text, View, Pressable } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigation } from '@react-navigation/native';
import styles from './memoriesMainView2.style';
import images from '../data/data';
import { MoodContext } from './MoodContext';
import Moon from './Moon';


const MemoriesMainView2 = () => { 
  const clearFilter = () => {
    setIndexFilter(null);
  };
  const handleDropdownPress = () => {
    setShowDropdown(!showDropdown);
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const navigation = useNavigation();
  const [diaryEntries, setDiaryEntries] = useState([]); 
  const [entriesByMonth, setEntriesByMonth] = useState({});
  const [indexFilter, setIndexFilter] = useState(null);
  const [marginTopValue, setMarginTopValue] = useState(10);
  const handleImageSelect = (index) => {
    setIndexFilter(index);
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
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDiaryEntries();
    });

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

  const monthTranslations = {
    'Tháng 1': 'January',
    'Tháng 2': 'February',
    'Tháng 3': 'March',
    'Tháng 4': 'April',
    'Tháng 5': 'May',
    'Tháng 6': 'June',
    'Tháng 7': 'July',
    'Tháng 8': 'August',
    'Tháng 9': 'September',
    'Tháng 10': 'October',
    'Tháng 11': 'November',
    'Tháng 12': 'December',
  };
  const { selectedMood, setSelectedMood } = useContext(MoodContext);
  const defaultMood = images[0].urls;

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
    {diaryEntries.map((entry, index) => { 
  const selectedImageIndex = entry.selectedImage;
  const isImageSelected = indexFilter === null || indexFilter === selectedImageIndex; 
  return isImageSelected && ( 
    <TouchableOpacity key={index} onPress={() => navigateToImageDetail(entry)}>
      <View key={index} style={styles.itemContainer}>  
        <View style={styles.dayContainer}>
          <Text style={{fontFamily:"title", color:"#ffffff", fontSize:12}}>{entry.year}</Text>
          <Text style={{fontFamily:"title", color:"#ffffff", fontSize:12}}>{entry.day}, {entry.month}</Text>     
        </View>
        <View style={styles.contentContainer}>
          <Text numberOfLines={2} style={{fontFamily:"title", color:"#ffffff", fontSize:12}}>{entry.title}</Text>
        </View>
        <View>
          <Image style={{width:32, height:32}} source={selectedMood[selectedImageIndex]}></Image>
        </View>
      </View>   
    </TouchableOpacity>
  );
})}
  </ScrollView> 
  ) 
} 
export default MemoriesMainView2