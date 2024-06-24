import React, { useContext, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { ThemeContext } from './ThemeContext';
import dataBg from '../data/dataBg';
import ImageList from './ImageList';
import styles from './mood.style';
 

const Mood = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  const defaultTheme = dataBg[0];

  const updateTheme = () => {
    setSelectedTheme(defaultTheme);
  };

  return (
    <View style={styles.backgroundContainer} >
      <View style={styles.mainViewContainer}>
      <ImageList />
      </View>
    </View>
  );
};

export default Mood;