import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View, Alert } from 'react-native';
import { inserirFilme} from '../../services/FilmeService'


export default function TelaCadastro( {navigation} ) {
    const [nome, onChangeNome] = useState("");
    const [ano, onChangeAno] = useState(null);
    const [nota, onChangeNota] = useState(null);
    

    return (
        <SafeAreaView style={styles.painel}>
            <Text style={styles.titulo}  >                Novo Filme </Text>

            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNome}
                placeholder="Informe o Nome"
                value={nome}

            />

            <Text style={styles.titulo} > Ano </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeAno}            
                placeholder="Informe o ano de lançamento"
                keyboardType="numeric"
                value={ano}
            />

            <Text> Nota </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNota}       
                placeholder="useless placeholder"
                keyboardType="numeric"
                value={nota}
            />
            <View style = {styles.painelBotoes}>
            <Button
                onPress={() => {
                    const novoFilme = {
                        nome: nome,
                        ano: ano,
                        nota: nota,
                    
                };
                if (nome.length === 0 ) {
                    Alert.alert("Erro", "O nome do Filme é uma informção obrigatória");
                    return;
                }
                inserirFilme({novoFilme});
                navigation.navigate('Listagem')
            }}
                title="Salvar"
                color="#841584"
                />

            <Button
                onPress={() => {
                    navigation.goBack();
                }}
                title="Cancelar"
               
               />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    painel: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 32,
        marginTop: 6,
        marginBottom: 10,  
    },
    
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    
});
