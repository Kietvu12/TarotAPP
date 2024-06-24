import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "row",
    height: height 
  },
  cardImageContainer:{
    marginTop: height * 0.05,
    left: width * 0.05, 
  },
  titleType:{
    fontFamily: 'title', 
    color:"#ffffff"
  },
  cardImageItem:{
    flexDirection:"row", 
    flexWrap:'wrap', 
    gap: 10
  },
  tarotCardContainer:{
    marginTop: height * 0.03, 
    padding: 0.001 
  },
  imageItem:{
    width: 69, 
    height: 122,  
    flexDirection:"row" 
  }
});

export default styles;