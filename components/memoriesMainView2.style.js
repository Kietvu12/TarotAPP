import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainMemoriesContainer: {
        height: height * 0.52,
        width: width * 0.9, 
    }, 
    itemContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: width * 0.9, 
        marginTop: height * 0.01, 
        borderRadius: width * 0.03, 
        padding: width * 0.03, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dayContainer: {
        width: width * 0.15,
        alignItems: "center",
    },
    contentContainer: {
        alignContent: "flex-start",
        width: width * 0.5,
    },
    dropDownMenuContainer:{
        position: 'relative'
    },
    dropDownMenuItem:{
        marginTop: height* 0.04, 
        marginLeft: width * 0.04,
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
        top: height * 0.08, 
        right: 0, 
        zIndex: 1,
        left: width * 0.08
    },
    dropDownMenuClearContainer:{
        marginTop:height * 0.1, 
        alignItems: 'center'
    }
});

export default styles;