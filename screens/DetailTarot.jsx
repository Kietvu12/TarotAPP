import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import styles from './detailTarot.style';
styles


const DetailTarot = ({ route }) => {
    const { card } = route.params;

    return (
        <ImageBackground style={styles.backgroundContainer}
        source={require("../assets/image/tarot_bg.png")}
        resizeMode='cover'
      >
          <View style={styles.cardInfoContainer}>
         <Image style={styles.imageContainer} source={card.img} />
         <Text style={{fontFamily:"title", color:"#ffffff"}}>{card.name}</Text>
         <Text style={{fontFamily:"title", color:"#ffffff"}}>{card.meaning}</Text>
         </View>
        </ImageBackground>
    );
};


export default DetailTarot;