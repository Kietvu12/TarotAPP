import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './moon.style'

const Moon = ({ imageUrl, handleImageSelect }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    handleImageSelect(index); 
  };  
  return (
    <View style={styles.optionContainer}>
    {imageUrl.map((image, index) => (
      <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
        <Image
          source={image}
          style={{ opacity: selectedImageIndex === index ? 1 : 0.5 }}
        />
      </TouchableOpacity>
    ))}
  </View>
  )
}

export default Moon