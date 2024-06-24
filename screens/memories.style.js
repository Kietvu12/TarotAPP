import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

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
    mainMemoriesContainer: {
        height: height * 0.93,
        width: width * 0.8,
        borderRadius: width * 0.1,
        padding: width * 0.08,
        justifyContent: "center",
        alignItems: "center", 
        position: 'absolute',
        top: height * 0.04, 
        left: width * 0.1, 
    },
    backgroundHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.03,
    },
    imageStyle: {
        height: height * 0.04,
        width: height * 0.04,
        marginLeft: width * 0.01,
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
    textTitle: {
        fontFamily: "title",
        color: "#ffffff",
        fontSize: width * 0.06,
        alignSelf: "center"
    }
});

export default styles;