import { Image, ScrollView, ScrollViewBase, Text, View } from "react-native"
import icons from "../../constants/icons";
import {styles} from "./home.style"
import Despesa from "../../components/despesas/despesa.jsx";

const Home = () => {
    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        <View style={styles.dashboard}>
            <View>
            <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
            <Text style={styles.dashboardText}>Total de Gastos</Text>          
            </View>
            <Image source={icons.money} style={styles.money}/>
        </View>
        <ScrollView>
            <Text style={styles.dashboardTitulo}>Despesas</Text>
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
            <Despesa />
        </ScrollView>
    </View>
}

export default Home;