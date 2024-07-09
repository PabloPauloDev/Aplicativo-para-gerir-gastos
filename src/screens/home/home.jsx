import { Image, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import icons from "../../constants/icons.js";
import { styles } from "./home.style";
import Despesa from "../../components/despesas/despesa.jsx";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import api from "../../services/api.js";

const Home = (props) => {
    const [total, setTotal] = useState(0);
    const [dados, setDados] = useState([]);

    const calcularTotal = (despesas) => {
        let soma = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
        setTotal(soma);
    }

    const OpenCadDespesa = () => {
        props.navigation.navigate('CadDespesa');
    }

    const handleExcluir = (id) => {
        api.delete('/money/deletar', { data: { id: id } })
            .then(response => {
                const novasDespesas = dados.filter(despesa => despesa.id !== id);
                setDados(novasDespesas);
                calcularTotal(novasDespesas);
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
                <Image source={icons.remove} style={styles.delete} />
            </TouchableOpacity>
        </View>
    );

    const carregarDespesas = () => {
        api.get('/money/listar')
            .then(response => {
                setDados(response.data);
                calcularTotal(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useFocusEffect(
        useCallback(() => {
            carregarDespesas();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Image source={icons.logo} style={styles.logo} />
            <View style={styles.dashboard}>
                <View>
                    <Text style={styles.dashboardValor}>
                        R$ {total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    </Text>
                    <Text style={styles.dashboardText}>Total de Gastos</Text>
                </View>
                <Image source={icons.money} style={styles.money} />
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
            <TouchableOpacity style={styles.btnAdd} onPress={OpenCadDespesa}>
                <Image source={icons.add} style={styles.btnAddImg} />
            </TouchableOpacity>
        </View>
    );
}

export default Home;
