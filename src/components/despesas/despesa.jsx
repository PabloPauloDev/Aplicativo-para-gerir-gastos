import { View, Text, Image } from "react-native"
import { styles } from "./despesa.style.js"
import icons from "../../constants/icons.js"

const Despesa = (props) => {

    return <View style={styles.despesa}>
        <View style={styles.containerIcon}>
            <Image source={props.icon} style={styles.despesaIcon}/>
        </View>
        <View style={styles.containerCategoria}>
            <Text style={styles.despesaCategoria}>{props.categoria}</Text>
            <Text style={styles.despesaDescricao}>{props.descricao}</Text>
        </View>
        <View style={styles.containerValor}>
            <Text style={styles.despesaValor}>R$ {props.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text>
        </View>
    </View>
}

export default Despesa