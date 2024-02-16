import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "80%",
        // backgroundColor: "green",
        marginBottom: 20,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    modal: {
        position: "absolute",
        width: "100%",
        height: "25%",
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10
    },
    header: {
        color: "white",
        fontSize: 15,
        fontWeight: "900",
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 15,
    },
    detailsText: {
        color: "white",
        fontSize: 10,
    }
});
