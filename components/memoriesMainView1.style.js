import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainMemoriesContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: height * 0.6,
        width: width * 0.9, 
        borderRadius: width * 0.09, 
        padding: width * 0.06, 
        margin: width * 0.05,
    },
    imageContainer: {
        marginTop: height * 0.015,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start", 
        left: width * 0.015,
    },
    itemContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: width * 0.04, 
    },
    dropDownMenuContainer:{
        position: 'relative'
    },
    dropDownMenuItem:{
        marginTop: height* 0.02, 
        flexDirection: "row", 
        gap: 10 
    },
    dropDownMenuImageIcon:{
        width: 10, 
        height: 10, 
        marginTop: height * 0.007
    },
    dropDownMenuSelect:{
        position: 'absolute', 
        top: height * 0.05, 
        right: 0, 
        zIndex: 1
    },
    dropDownMenuClearContainer:{
        marginTop:height * 0.1, 
        alignItems: 'center'
    }
})

export default styles;