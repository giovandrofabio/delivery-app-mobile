import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const deliveriesStyle = StyleSheet.create({
    card: {
        margin: 10
    },
    cardStatus: {
        borderTopWidth: 3,
        borderTopColor: "yellow"
    },
    cardTitle: {
        color: theme.colors.primary
    },
    price: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
        marginEnd: 15
    }
})