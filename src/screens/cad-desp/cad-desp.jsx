import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './cad-desp.style.js'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

const CadDespesa = () => {
    const [id, setId] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSalvar = () => {
        
    }
    const handleCancelar = () => {
        
    }

    return <View style = {styles.container}>
        
        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Valor</Text>
            <TextInput placeholder='0,00' style={styles.containerValor} keyboardType='decimal-pad'></TextInput>
        </View>

        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Descricao</Text>
            <TextInput placeholder='Aluguel' style={styles.inputText} defaultValue=''></TextInput>
        </View>

        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Categoria</Text>
            <View style={styles.inputPicker}>
                <Picker 
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) => {
                    setCategoria(itemValue)
                }}>
                    <Picker.Item label='Casa' value='Casa' />
                    <Picker.Item label='Educação' value='Educação' />
                    <Picker.Item label='Lazer' value='Lazer' />
                    <Picker.Item label='Moto' value='Moto' />
                    <Picker.Item label='Viagem' value='Viagem' />
                </Picker>
            </View>
        </View>

        <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnCancelar}>
                <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSalvar}>
                <Text style={styles.textSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default CadDespesa