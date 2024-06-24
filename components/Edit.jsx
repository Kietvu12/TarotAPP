import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './edit.style';
import Moon from './Moon';
import images from '../data/data';
import dataBg from '../data/dataBg';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { MoodContext } from './MoodContext';

const image = images
const Edit = ({ route, navigation }) => {
    const entryData = route.params?.entryData;
    const [title, setTitle] = useState(entryData ? entryData.title : '');
    const [content, setContent] = useState(entryData ? entryData.content : '');
    const [selectedImage, setSelectedImage] = useState(entryData ? entryData.selectedImage : '');
    const handleUpdate = async () => {
        try {
            if (!entryData) {
                console.error('Error: entryData is undefined');
                return;
            }
            const updatedEntry = {
                title: title,
                content: content,
                selectedImage: selectedImage,
                date: entryData.date
            };

            let entries = await AsyncStorage.getItem('diaryEntries');
            entries = entries ? JSON.parse(entries) : [];
            const updatedEntries = entries.map(item => (item.date === entryData.date ? updatedEntry : item));
            await AsyncStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
            navigation.navigate('Memories');
        } catch (error) {
            console.error('Error updating entry:', error);
        }
    };
    const handleImageSelect = (index) => {
        setSelectedImage(index);
        AsyncStorage.setItem('selectedImageIndex', index.toString()); // Lưu chỉ số vào AsyncStorage
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
    }, [selectedMood]);
    return (
        <ImageBackground source={selectedTheme} style={styles.backgroundContainer} resizeMode='cover'>
            <View style={styles.headingContainer}>
                <View style={styles.backgroundHeadingContainer}>
                    <TouchableOpacity onPress={handleUpdate}>
                        <View style={styles.rightContainer}>
                            <Image source={require("../assets/image/done.png")} style={styles.imageStyle} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.moonOptionContainer}>
                    <Moon imageUrl={selectedMood} handleImageSelect={handleImageSelect} />
                    <TextInput placeholder='Title' value={title}
                        onChangeText={setTitle} placeholderTextColor="#ffffff" style={{ color: "#ffffff", fontSize: 15, fontFamily: "title" }}></TextInput>
                    <Image source={require("../assets/image/Vector 1.png")} />
                    <TextInput placeholder='Content' value={content}
                        onChangeText={setContent} placeholderTextColor="#ffffff" style={{ color: "#ffffff", fontSize: 15, fontFamily: "title" }}></TextInput>
                </View>
            </View>
        </ImageBackground>
    );
};
export default Edit;