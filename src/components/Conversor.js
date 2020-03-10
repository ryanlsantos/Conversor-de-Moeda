import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default function Conversor() {
  const [valor, setValor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Converter App</Text>

      <View style={styles.textInput}>
        <Text style={styles.label}>Entre com o valor em reais</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={Number(valor)}
          onChangeText={valor => setValor(Number(valor))}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.h2}>Total de centavos: {valor * 100}</Text>

      <View style={styles.textDiv}>
        <Text style={styles.h3}>Moedas de 0,50: {(valor * 10) / 5}</Text>
        <Text style={styles.h3}>Moedas de 0,25: {(valor * 10) / 2.5}</Text>
        <Text style={styles.h3}>Moedas de 0,10: {(valor * 10) / 1}</Text>
        <Text style={styles.h3}>Moedas de 0,05: {(valor * 10) / 0.5}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  h1: {
    fontSize: 50,
    // fontWeight: "bold",
    marginBottom: 100
  },

  h2: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    marginBottom: 50
  },

  h3: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },

  label: {
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#444",
    height: 40,
    width: 300
  },

  textInput: {
    marginBottom: 60
  },

  textDiv: {
    marginRight: 150
  },

  button: {
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginBottom: 40
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
