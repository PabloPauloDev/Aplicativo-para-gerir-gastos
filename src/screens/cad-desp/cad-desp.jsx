import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './cad-desp.style.js'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import api from '../../services/api.js'

const CadDespesa = (props) => {
    const [id, setId] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSalvar = () => {


        const novaDespesa = {
            valor: valor,
            descricao: descricao,
            assunto: categoria
        }

        if (valor <=0 || descricao == '' || categoria == '') {
            alert('Preencha todos os campos!');
            return;
        }

        api.post('/money/inserir', {
            params: {
                valor: valor,
                descricao: descricao,
                assunto: categoria
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        

        props.navigation.navigate('Home')
    }
    const handleCancelar = () => {
        props.navigation.navigate('Home')
    }

    return <View style = {styles.container}>
        
        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Valor</Text>
            <TextInput placeholder='0,00' style={styles.containerValor} keyboardType='decimal-pad' onChangeText={text => setValor(text)}></TextInput>
        </View>

        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Descricao</Text>
            <TextInput placeholder='Aluguel' style={styles.inputText} defaultValue='' onChangeText={text => setDescricao(text)}></TextInput>
        </View>

        <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Categoria</Text>
                <View style={styles.inputPicker}>
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(itemValue, itemIndex) => {
                            setCategoria(itemValue);
                        }}
                    >
                        <Picker.Item label='Casa' value='Casa' />
                        <Picker.Item label='Educação' value='Educação' />
                        <Picker.Item label='Lazer' value='Lazer' />
                        <Picker.Item label='Moto' value='Moto' />
                        <Picker.Item label='Viagem' value='Viagem' />
                    </Picker>
                </View>
            </View>

        <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnCancelar} onPress={handleCancelar}>
                <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSalvar} onPress={handleSalvar}>
                <Text style={styles.textSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default CadDespesa