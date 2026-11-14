
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

type Registro = {
  id: number;
  numero: number;
  hora: string;
};

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoNumero = contador + 1;
    setContador(nuevoNumero);

    const nuevoRegistro: Registro = {
      id: Date.now(),
      numero: nuevoNumero,
      hora: new Date().toLocaleTimeString("es-CO"),
    };

    setRegistros((registrosActuales) => [
      ...registrosActuales,
      nuevoRegistro,
    ]);
  };

  return (
    <View style={estilos.body}>
      <Text style={estilos.contador}>{contador}</Text>

      <TouchableOpacity
        style={estilos.btnClick}
        onPress={incrementarContador}
      >
        <Text style={estilos.btnText}>¡Haz clic aquí!</Text>
      </TouchableOpacity>

      <View style={estilos.tableContainer}>
        <View style={estilos.tableHeader}>
          <Text style={estilos.th}>Nº Clic</Text>
          <Text style={estilos.th}>Hora</Text>
        </View>

        {registros.map((item) => (
          <View key={item.id} style={estilos.tr}>
            <Text style={estilos.td}>{item.numero}</Text>
            <Text style={estilos.td}>{item.hora}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "rgb(241, 240, 240)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  contador: {
    color: "#3498db",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
  },

  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 9,
    paddingHorizontal: 22,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },

  btnText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },

  tableContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e1e4e8",
    borderRadius: 6,
    overflow: "hidden",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f6f7",
  },

  tableBody: {
    maxHeight: 170,
    backgroundColor: "#ffffff",
  },

  tr: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },

  trEven: {
    backgroundColor: "#ecebeb",
  },

  th: {
    color: "#777777",
    fontSize: 11,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    flex: 1,
  },

  td: {
    color: "#555555",
    fontSize: 12,
    padding: 9,
    textAlign: "center",
    flex: 1,
  },
});