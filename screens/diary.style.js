import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headingContainer: {
    height: height * 0.1,
    width: "100%",
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.02,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "flex-end",
    top: height * 0.02,
  },
  backgroundHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05, 
  },
  imageStyle: {
    height: 35,
    width: 35,
    marginLeft: 0,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: "row"
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  moonOptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: height * 0.8,
    width: width * 0.9, 
    borderRadius: width * 0.09, 
    padding: width * 0.06, 
    margin: width * 0.05,
    top: height * 0.08 
  },
  optionContainer: {
    flexDirection: "row",
    gap: 5
  },
  titleText: {
    fontFamily: "title",
    color: "#ffffff",
    fontSize: width > 600 ? 30 : 25,
    alignSelf: "center"
  },
  mainContentText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "title",
    marginTop: height*0.02,
    flexWrap:"wrap"
  }
})

export default styles;