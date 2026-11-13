import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => {
    console.log("Se presionó el botón");
    setContador((valorActual) => valorActual + 1);
  };

  return (
    <View style={estilos.body}>
      <Text>Contador de clics</Text>
      <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
        <Text style={estilos.btnText}>¡Haz clic aquí!</Text>
      </TouchableOpacity>
      <Text>{contador}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
  },
  btnClick: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    margin: 15,
    alignItems: "center",
  },

  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
