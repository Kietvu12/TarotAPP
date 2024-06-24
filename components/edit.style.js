
import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    mainContainer:{
        width:320,
        height:520,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30
    }, 
    moonOptionContainer:{
        marginTop:20,
        padding: 12,
        gap: 20
    },
    headingContainer: {
      height: 120,
      width: "100%",
      position: 'absolute',
      paddingHorizontal: 24,
      paddingVertical: 12,   
      flexDirection:"row",  
      gap: 85, 
      alignItems: "flex-end",
      top: 0
    },
    backgroundHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10, 
        
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
        marginBottom: height * 0.06
      },
})

export default styles