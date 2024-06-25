import {COLORS, FONT_SIZE} from "../../constants/themes.js"

const styles = {
    container: {
        padding: 15,
        height: "100%",
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#ffffff',

    },
    logo: {
        marginTop: 30,
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
        bottom: 30
    },
    titulo: {
        width: '100%'
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
        borderRadius: 11,
        marginTop: 10
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    delete: {
        width: 20
    }
}

export { styles }