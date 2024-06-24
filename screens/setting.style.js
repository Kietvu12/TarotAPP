import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
      textTitle: {
        fontFamily: "title",
        color: "#ffffff",
        fontSize: width * 0.06,
        alignSelf: "center"
    },
      backgroundHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05, 
      },
      headingTabNavigation: {
        height: height * 0.8,
        width: "100%",
        right: width*0.01,
        top: height * 0.1
      },
      backButtonContainer: {
        flex: 1,
        flexDirection: "row"
      },
      mainContainer:{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: height * 0.8,
            width: width * 0.9, 
            borderRadius: width * 0.09, 
            padding: width * 0.06, 
            margin: width * 0.05,
            top: height * 0.08,
            marginBottom: height * 0.2
      },
      container_1:{
        flexDirection: 'row', 
        marginTop: height * 0.02,
      },
      title:{
        fontFamily:"title", 
        fontSize: 20, 
        marginLeft: width * 0.03, 
        color:"#ffffff"
      },
      itemText:{
        fontFamily:"title", 
        fontSize: 10, 
        marginTop: width * 0.04, 
        color:"#ffffff"
      },
      slider :{
        width: width * 0.75, 
        marginTop: width * 0.03
      },
      itemText:{
        fontFamily:"title", 
        fontSize: 15, 
        marginTop: height * 0.02, 
        color:"#ffffff"
      },
      social:{
        marginTop: height * 0.4,
        gap: 10,
      }
      


})

export default styles