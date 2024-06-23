import {COLORS, FONT_SIZE} from "../../constants/themes.js"

const styles = {
    container: {
        height: "92%",
        gap: 10,
        marginTop: 50,
        margin: 20,
    },
    containerField: {
        marginBottom: 40
    },
    inputLabel: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_grey
    },
    containerValor: {
        fontSize: FONT_SIZE.lg,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: 'bold'
    },
    inputText: {
        fontSize: FONT_SIZE.lg,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: 'bold'
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnCancelar: {
    },
    textCancelar: {
        color: COLORS.white
    },
    btnSalvar: {
        alighItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blue,
        borderRadius: 15,
        width: '40%',
        height: '20%'
    },
    textSalvar: {
        color: COLORS.white
    }
}

export { styles }