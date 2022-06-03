import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Cep(props) {
  return (
   <>
   <Text style={styles.text}> Sua Cidade: {props.data.localidade}</Text>
   <Text style={styles.text}> Bairro: {props.data.bairro}</Text>
   <Text style={styles.text}> Estado: {props.data.uf}</Text>
   <Text style={styles.text}> Logradouro: {props.data.logradouro}</Text>
   <Text style={styles.text}> Complemento: {props.data.complemento}</Text>
   </>
  );
}

const styles = StyleSheet.create({
   text:{
       marginTop:10,
       fontSize:15,
   }
});
