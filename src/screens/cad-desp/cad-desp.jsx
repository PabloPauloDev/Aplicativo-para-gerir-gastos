import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './cad-desp.style.js'

const CadDespesa = () => {
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
            <TextInput placeholder='Aluguel' style={styles.inputText} defaultValue=''></TextInput>
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