import { View, Text, Image } from "react-native"
import { styles } from "./despesa.style.js"
import icons from "../../constants/icons.js"

const Despesa = () => {

    return <View style={styles.despesa}>
        <View style={styles.containerIcon}>
            <Image source={icons.carro} style={styles.despesaIcon}/>
        </View>
        <View style={styles.containerCategoria}>
            <Text style={styles.despesaCategoria}>Carro</Text>
            <Text style={styles.despesaDescricao}>Pagamento do IPVA</Text>
        </View>
        <View style={styles.containerValor}>
            <Text style={styles.despesaValor}>2.000,00</Text>
        </View>
    </View>
}

export default Despesa