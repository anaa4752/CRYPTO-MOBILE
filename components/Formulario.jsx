
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function Formulario() {
    // States
    const [moneda, setMoneda] = useState("");
    const [crypto, setCrypto] = useState("");
    const [mensajeForm, setMensajeForm] = useState(false);

    return (
        <View>

            <Text style={styles.label}>Moneda</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={(itemValue) => setMoneda(itemValue)}
            >
                <Picker.Item label="Seleccione" value="" />
                <Picker.Item label="Dolar" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={crypto}
                onValueChange={(itemValue) => setCrypto(itemValue)}
            >
                <Picker.Item label="Seleccione" value="" />
            </Picker>

            <Pressable
                style={styles.btnCotizar}
                onPress={() => setMensajeForm(true)}
            >
                <Text style={styles.textCotizar}>Cotizar</Text>
            </Pressable>

            {mensajeForm &&
                <Text>Formulario creado</Text>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        textTransform: 'uppercase',
        color: '#5E49E2',
        fontWeight: '700',
        fontSize: 22,
        marginVertical: 20
    },
    pickerInput: {
        height: 50,
        backgroundColor: '#FFF'
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});