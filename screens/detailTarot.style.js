import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems:  "center",
        justifyContent: "center",
        flexDirection: "row", 
        padding: 10
    },
    tarotContainer:{
        flexDirection: "row",
        gap:2,
        alignItems: "center",
        justifyContent: "center"
    },
    cardInfoContainer:{
        flexDirection: "column",   
        alignItems:"center",
        top: 0,
        gap: 2
    },
    imageContainer:{
        width: 200,
        height:350,
        borderRadius: 5,
    },

})
export default styles;