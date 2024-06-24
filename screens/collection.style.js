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
  titleText: {
    fontFamily: "title",
    color: "#ffffff",
    fontSize: 25,
    alignSelf: "center"
  },
  headingTabNavigation: {
    height: height * 0.8,
    width: "100%",
    right: width*0.01,
    top: height * 0.1
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row"
  },

})
export default styles
