import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';


function onPressLearnMore(){
  console.log("clicou")
}

export default function TelaBoasVindas({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>Bem vindos ao app!</Text>
      <Button
  onPress={ () => {
navigation.navigate('Listagem');
  }}
  title="ENTRAR"
  color="#841584"
  accessibilityLabel="Entrar para valer na aplicação"
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mensagem: {
    fontSize: 44,
  }
});
