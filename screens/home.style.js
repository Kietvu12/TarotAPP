import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    headingContainer: {
        height: height * 0.14,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.02,
        flexDirection: "row",
        justifyContent: 'space-between', 
        alignItems: "center",
        top: 0
    },
    logoContainer: {
        height: height * 0.05, 
        width: height * 0.05,
        alignItems: "flex-end"
    },
    musicContainer: {
        height: height * 0.04,
        width: height * 0.04
    },
    titleContainer: {
        color: '#ffffff',
        fontFamily: 'title',
        fontSize: 20,
        fontWeight: '600'
    },
    swipeUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    swipeUpItem: {
        position: 'absolute',
        bottom: height * 0.1
    },
    swipeUpImage: {
        height: height * 0.15,
        width: width * 0.2, 
        left: width * 0.05,
        right: width * 0.05
    },
    swipeUpText: {
        fontFamily: "title",
        color: "#ffffff",
        textAlign: 'center',
        bottom: height * 0.04
    }
})

export default styles;