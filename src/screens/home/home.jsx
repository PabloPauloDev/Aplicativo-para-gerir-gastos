import { Image, ScrollView, ScrollViewBase, Text, TouchableOpacity, View } from "react-native"
import icons from "../../constants/icons";
import {styles} from "./home.style"
import Despesa from "../../components/despesas/despesa.jsx";
import { useEffect, useState } from "react";

const Home = () => {
    const [total, setTotal] = useState(0);
    const [despesas, setDespesas] = useState([]);

    const dados = [{id:1, icon:icons.mercado, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:3, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:4, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:5, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:6, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:7, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    {id:8, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100}]

    const OpenDespesa = (id) =>{
        console.log('Cadastrar Despesa...')
    }

    const ListarDespesas = () => {
        let soma = 0
        for (var i=0; i<dados.length; i++) {
            soma += dados[i].valor;
        }
        setTotal(soma)
        setDespesas(dados)
    }

    useEffect(() => {
        ListarDespesas()
    }, [])
    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        <View style={styles.dashboard}>
            <View>
            <Text style={styles.dashboardValor}>R$ {total.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text>
            <Text style={styles.dashboardText}>Total de Gastos</Text>          
            </View>
            <Image source={icons.money} style={styles.money}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.dashboardTitulo}>Despesas</Text>
            {
                despesas.map((desp)=>{
                    return <Despesa key={desp.id}
                            id={desp.id}
                            icon={desp.icon}
                            categoria={desp.categoria}
                            descricao={desp.descricao}
                            valor={desp.valor}/>
                })
            }
        </ScrollView>
        <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)}>
            <Image source={icons.add} style={styles.btnAddImg} />
        </TouchableOpacity>
    </View>
}

export default Home;