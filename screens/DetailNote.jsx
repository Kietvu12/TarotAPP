
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './detailNote.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import images from '../data/data';
import dataBg from '../data/dataBg';
import { ThemeContext, ThemeProvider } from '../components/ThemeContext';
import { MoodContext } from '../components/MoodContext';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
const { Dwidth, Dheight } = Dimensions.get('window');

const DetailNote = ({ route }) => {
    const navigation = useNavigation();
    const { entry } = route.params;
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedTarotCard, setSelectedTarotCard] = useState(null);
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
    const defaultTheme = dataBg[0];
    const handleDropdownPress = () => {
        setShowDropdown(!showDropdown);
    };
    useEffect(() => {
        const checkTarotForNote = async () => {
            try {
                const cardHistory = await AsyncStorage.getItem('cardsHistory');
                if (cardHistory) {
                    const history = JSON.parse(cardHistory);
                    const matchingCard = history.find(item => {
                        const cardDate = new Date(item.time);
                        return cardDate.toDateString() === new Date(entry.date).toDateString();
                    });

                    if (matchingCard) {
                        setSelectedTarotCard(matchingCard.card);
                    }
                }
            } catch (error) {
                console.error('Error checking Tarot for Note:', error);
            }
        };

        checkTarotForNote();
    }, [entry.date]);

    const handleDelete = async () => {
        try {
            let entries = await AsyncStorage.getItem('diaryEntries');
            entries = entries ? JSON.parse(entries) : [];

            const updatedEntries = entries.filter(item => item.date !== entry.date);

            await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
            navigation.navigate('Memories');
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    const handleModify = () => {
        navigation.navigate('Edit', { entryData: entry });
    };
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
    }, [selectedMood]);
    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };
    const dateObject = new Date(entry.date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
    return (
        <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
            <View style={styles.headingContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../assets/image/back_btn.png')} 
            /> 
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.mainContainer}>
                <Pressable onPress={handleDropdownPress}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.menuImage} source={require("../assets/image/Moon/menu.png")} />
                        {showDropdown && (
                            <View style={styles.dropdownMenu}>
                                <Pressable onPress={handleDelete}>
                                    <Text style={styles.dropdownItem}>Delete</Text>
                                </Pressable>
                                <Image source={require("../assets/image/Vector 1.png")} style={styles.lineImage} /> 
                                <Pressable onPress={handleModify}>
                                    <Text style={styles.dropdownItem}>Modify</Text>
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Image style={styles.imageMood} source={selectedMood[entry.selectedImage]} />
                </Pressable>
                <View style={styles.titleContainer}>
                    <Text style={styles.textTitle}>
                        {entry.title}
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.textContent}>
                        {entry.content}
                    </Text>
                </View>
                
                {selectedTarotCard && (
                    <View style={styles.cardInfoContainer}>
                        <View style={styles.dateContainer}>
                        <Text style={styles.textDate}>Wish you a good day.</Text>
                        <Text style={styles.textDate}>{formattedDate}</Text>
                        <Text style={styles.textDate}>{formattedTime}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailTarot', { card: selectedTarotCard })}>
                            <Image style={styles.imageTarotContainer} source={selectedTarotCard.img} />
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
};

export default DetailNote;