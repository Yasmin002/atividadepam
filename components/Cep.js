import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Cep() {
  return (
   <>
   <Text style={styles.text}> Cidade:</Text>
   <Text style={styles.text}> Estado:</Text>
   <Text style={styles.text}> Logradouro:</Text>
   <Text style={styles.text}> Complemento:</Text>
   </>
  );
}

const styles = StyleSheet.create({
   text:{
       marginTop:10,
       fontSize:15,
   }
});