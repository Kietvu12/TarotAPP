import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainContainer: {
    flexDirection: 'row',
    gap: width * 0.05,
    padding: width * 0.02,
    marginBottom: height * 0.2
  },
  image: {
    width: width * 0.4,
    height: height * 0.4,
  },
  unlockButton: {
    position: 'absolute',
    width: width*0.15,
    height: height*0.03,
    right: width*0.12,
    top: height*0.18,
    borderRadius: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  unlockText: {
    color: 'white',
    fontFamily:"title",
    fontSize: 10, 
  }

})
export default styles