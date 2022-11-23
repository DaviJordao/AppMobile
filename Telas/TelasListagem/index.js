import React, { useState } from 'react';
import {    StyleSheet, Text, SafeAreaView, FlatList, StatusBar,
    TouchableOpacity, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExcluirFilmes from '../../Componente/ExcluirFilmes';
import { listarFilmes, selecionarFilmes } from '../../services/FilmeService';


function Filmes ({ filmes }) {
    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Vizualizacao', { ...filmes });
                selecionarFilmes({ id: filmes.id })
            }} style={[styles.item]}>
                <Text style={styles.titulo}>{filmes?.nome}</Text>
            </TouchableOpacity>
            <ExcluirFilmes filmes ={filmes} />
        </View>
    );
}

function Cabecalho() {
    return (
        <View style={styles.painel}>
            <Text style={styles.titulo}>Meus Filmes</Text>

        </View>
    )
}
function Rodape() {
    const navigation = useNavigation();
    return (
        <View style={styles.painel}>
            <Button
                onPress={() => {
                    navigation.navigate('Cadastro', { filmes: null });
                }}
                title="Cadastrar"
                color="#841584"
                accessibilityLabel="Cadastrar um novo Filme"
            />
        </View>
    );
}
function ListaVazia() {
    return (
        <View style={styles.painel}>
            <Text>Não tem nenhum filme cadastrado.</Text>
            <Text>Faça o cadastro utilizando o botão "Cadastrar"</Text>

        </View>
    );
}


export default function TelasListagem() {
    const [selectedId, setSelectedId] = useState(null);



    const renderFilme = ({ item: filmes }) => {
        const backgroundColor = filmes?.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = filmes?.id === selectedId ? 'white' : 'black';
        return (
            <Filmes
                filmes={filmes}
                onPress={() => setSelectedId(filmes.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}

            />
        );
    }
    const meusFilmes = listarFilmes();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={meusFilmes}
                renderItem={renderFilme}
                keyExtractor={filmes => filmes.id}
                ListHeaderComponent={Cabecalho}
                ListFooterComponent={Rodape}
                ListEmptyComponent={ListaVazia}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',

    },
    titulo: {
        fontSize: 32,
    },
    itemContainer: {
        flexDirection: "row",
    }
});
