import {COLORS, FONT_SIZE} from "../../constants/themes.js"

const styles = {
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 50,
        margin: 10,
        borderWidth: 4
    },
    logo: {
        width: 100,
        height: 30,
    },
    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md
    },
    money: {
        width: 35,
        height: 60
    }
}

export { styles }