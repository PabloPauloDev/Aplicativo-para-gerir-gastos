import {COLORS, FONT_SIZE} from "../../constants/themes.js"

const styles = {
    container: {
        height: "92%",
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#fff',
        marginTop: 50,
        margin: 20,
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
    },
    dashboardTitulo: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        marginTop: 15,
        fontWeight: "bold",
        TextAlign: "left"
    },
    btnAddImg: {
        width:50,
        height: 51
    },
    btnAdd: {
        position: 'absolute',
        bottom: 12
    },
    titulo: {
        width: '100%'
    }
}

export { styles }