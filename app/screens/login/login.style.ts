import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: theme.colors.primary
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        color: theme.colors.primary
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0
    }
})