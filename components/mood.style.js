import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
      alignItems: "center",
      justifyContent: "center"
      },
    mainViewContainer:{
        marginTop: height * 0.02,
    }
})
export default styles