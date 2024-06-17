import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS, FONT_SIZE} from "../../constants/themes.js"

export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.gray,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    despesaIcon: {
        width: 35,
        height: 35,
    },
    containerIcon: {
        flex: 3
    },
    containerCategoria: {
        flex: 10
    },
    containerValor: {
        flex: 4
    },
    despesaCategoria: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        fontWeight: "bold"
    },
    despesaDescricao: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey
    },
    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        fontWeight: "bold",
        textAlign: "right"
    }
}
