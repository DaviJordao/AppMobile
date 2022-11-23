import React from 'react';
import {  StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';

import ExcluirFilmes from '../../Componente/ExcluirFilmes';




export default function TelaVizualizacao ({route, navigation}) {
    const {id, nome, ano, nota} = route.params;
    const filmes = { id, nome, ano, nota};
    return (
        <SafeAreaView style={styles.painelPrincipal}>
            <Text style={styles.titulo}>{ nome }</Text>
            <Text style={styles.rotulo}>Ano do Filme: </Text>
            <Text style={styles.campo}>{ ano }</Text>
            <Text style={styles.rotulo}>Nota: </Text>
            <Text style={styles.campo}>{ nota }</Text>
            <View style={styles.painelBotoes}>
                <Button
                onPress={() => {
                    navigation.goBack();
                }}
                 title ="Cadastrar"
                 color ="#841584"
                 style ={styles.botao}

                />
            <ExcluirFilmes filmes= { filmes } />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    painelPrincipal: {
        paddingHorizontal: 10,
    },
    campo: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 6,

    },
    titulo: {
        fontSize: 32,
    },
    rotulo: {
        color: 'grey',
        paddingTop: 10,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    
});
