import { Image, ScrollView, ScrollViewBase, Text, TouchableOpacity, View } from "react-native"
import { SwipeListView } from "react-native-swipe-list-view";
import icons from "../../constants/icons";
import {styles} from "./home.style"
import Despesa from "../../components/despesas/despesa.jsx";
import { useEffect, useState } from "react";
import api from "../../services/api.js"

const Home = (props) => {
    const [total, setTotal] = useState(0);
    const [despesas, setDespesas] = useState([]);
    const [dados, setDados] = useState([]);

    //const dados = [{id:1, icon:icons.mercado, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:3, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:4, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:5, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:6, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:7, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:8, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:9, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:10, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100},
    //{id:11, icon:icons.carro, categoria:'Mercado', descricao:'Compras do mes', valor:100}]

    const ListarDespesas = () => {
        let soma = 0
        for (var i=0; i<dados.length; i++) {
            soma += dados[i].valor;
        }
        setTotal(soma)
        setDespesas(dados)
    }

    const OpenCadDespesa = () =>{
        props.navigation.navigate('CadDespesa')
    }

    const handleExcluir = (id) =>{
        console.log(id)
        api.delete('/money/deletar', {
            params: {
                id: id
            }
        }).then(response =>{
            setDados(prevDados => prevDados.filter(despesa => despesa.id !== id));
        }).catch(error => {
            console.error('Erro ao excluir despesa:', error);
        });
    }

    const renderItem = data => (
        <Despesa
            key={data.item.id}
            id={data.item.id}
            icon={icons[data.item.assunto]}
            categoria={data.item.assunto}
            descricao={data.item.descricao}
            valor={data.item.valor}
        />
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => handleExcluir(data.item.id)}
            >
                <Image source={icons.remove} style={styles.delete}/>
            </TouchableOpacity>
        </View>
    );
    
    useEffect(() => {
        api.get('/money/listar')
            .then(function (response) {
                setDados(response.data)
            })
            .catch(function (err) {
                console.log(err);
            })
    }, [])

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
        <View style={styles.titulo}>
            <Text style={styles.dashboardTitulo}>Despesas</Text>
        </View>
        <SwipeListView
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
                disableRightSwipe
            />
        {/* <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView> */}
        <TouchableOpacity style={styles.btnAdd} onPress={() => OpenCadDespesa(0)}>
            <Image source={icons.add} style={styles.btnAddImg} />
        </TouchableOpacity>
    </View>
}

export default Home;