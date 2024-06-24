import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const smallScreen = width < 375;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headingContainer: {
        height: height * 0.1,
        width: "100%",
        position: 'absolute',
        zIndex: 1,
        flexDirection: "row",
        justifyContent: smallScreen ? 'space-around' : 'center',
        alignItems: "flex-end",
        top: height*0.02,
        right: '35%'  
    },
    mainContainer: {
        width: smallScreen ? width - 40 : 320,
        height: smallScreen ? height - 150 : 620,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: height * 0.15,
    },
    imageContainer: {
        marginTop: height * 0.05,
        marginLeft: width * 0.4
    },
    contentContainer: {
        marginTop: height * 0.03,
        alignItems: "center",
        marginLeft: width * 0.05,
        marginRight: width * 0.05
    },
    titleContainer: {
        flexDirection: "row",
        left : width * 0.15, 
        right: width * 0.03,
    },
    menuContainer: {
        backgroundColor: "black",
        height: 80,
        width: 180,
        borderRadius: 20,
        flexDirection: "column",
        marginTop: height * 0.015,
        marginLeft: smallScreen ? 20 : 100,
    },
    menuOption: {
        fontFamily: "title",
        color: "#ffffff",
        margin: 2,
    },
    dropdownMenu: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: 20,
        gap: 8,
        position: 'absolute',
        zIndex:1,
        width: width*0.5,
        height: height*0.1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom: 7, 
        paddingTop:7,
        padding : 10,
        right: width*0.15, 
        top: height*0.02,
    },
    dropdownItem: {
        fontFamily: "title",
        color: "#ffffff",
    },
    cardInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: height * 0.2,
        marginLeft: width * 0.18,
    },
    imageTarotContainer: {
        width: 75,
        height: 130,
        borderRadius: 5,
        marginTop: height * 0.1,
        marginLeft: width*0.05,
    },
    menuImage: {
        marginLeft: smallScreen ? 170 : 100,
    },
    imageMood: {
        marginTop: height * 0.04,
        marginLeft: smallScreen ? 130 : 130,
    },
    textContent: {
        fontFamily: "title",
        color: "#ffffff",
        alignItems: "center",
        fontSize: 15,
        marginTop: height * 0.02,
    },
    textTitle: {
        fontFamily: "title",
        color: "#ffffff",
        fontSize: 15,
        marginTop: height * 0.03,
        marginLeft: width * 0.2,
    },
    textDate: {
        fontFamily: "title",
        color: "#ffffff",
        fontSize:12,
        marginTop: 1,
    },
    dateContainer:{
        flexDirection:'column',
        marginRight:width*0.01,
        marginTop:height*0.15,
        marginLeft: width * 0.01,
        right: 40
    },
    lineImage:{
        width: width*0.38
    }
});

export default styles;