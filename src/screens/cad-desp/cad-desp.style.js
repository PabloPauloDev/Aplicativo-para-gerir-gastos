import {COLORS, FONT_SIZE} from "../../constants/themes.js"

const styles = {
    container: {
        height: "85%",
        justifyContent: 'space-between',
        marginTop: 100,
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
        justifyContent: 'space-between',
        bottom: 12
    },
    btnCancelar: {
        alighItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.medium_grey,
        fontSize: FONT_SIZE.md,
        width: '48%',
        height: '35%'
    },
    textCancelar: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnSalvar: {
        alighItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        width: '48%',
        height: '35%'
    },
    textSalvar: {
        textAlign: 'center',
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.white
    },
    inputPicker: {
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
    }
}

export { styles }