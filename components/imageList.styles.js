import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: width * 0.15,  
    height: width * 0.15, 
    margin: 5,
  },
  categoryTitle: {
    fontSize: 15,
    marginTop: height * 0.01, 
    marginBottom: height * 0.005, 
    color:'#ffffff',
    fontFamily:'title',
    width:100
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: height * 0.04, 
  },
  categoryContainer:{
    flexDirection: 'row'
  },
  stateActiveButton:{
    left: width*0.45,
    width: width*0.15,
    height: height*0.03,
    borderRadius: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  activeText: {
    color: 'white',
    fontFamily:"title",
    fontSize: 10, 
  },
    stateActiveButton:{
    left: width*0.45,
    width: width*0.15,
    height: height*0.03,
    borderRadius: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  activeText: {
    color: 'white',
    fontFamily:"title",
    fontSize: 10, 
  },
  stateActivedButton:{
    left: width*0.45,
    width: width*0.15,
    height: height*0.03,
    borderRadius: 40,
    backgroundColor:"white",
    alignItems:'center',
    justifyContent:'center'
  },
  activedText: {
    color: 'black',
    fontFamily:"title",
    fontSize: 10, 
  },
  stateLockedButton:{
    left: width*0.45,
    width: width*0.15,
    height: height*0.03,
    borderRadius: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  lockedText: {
    color: 'white',
    fontFamily:"title",
    fontSize: 10, 
  },
});


export default styles;