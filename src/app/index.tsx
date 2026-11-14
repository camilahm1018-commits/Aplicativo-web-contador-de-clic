import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
    setRegistros((registrosActuales) => [...registrosActuales, nuevoRegistro]);
  };
  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };
  return (
    <View style={estilos.body}>
      <View style={[estilos.tarjeta, contador > 10 && estilos.tarjetaActiva]}>
        <Text style={estilos.titulo}>Interactividad con el DOM</Text>
        <Text style={estilos.descripcion}>
          Haz clic en el boton para incrementar el contador y registra la hora
          exacta del envento en la tabla.
        </Text>
        <Text style={[estilos.contador, contador > 10 && estilos.contadorAlto]}>
          {contador}
        </Text>
        {contador > 10 && (
          <Text style={estilos.mensaje}>¡Has superado los 10 clics!</Text>
        )}
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Haz clic aquí!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilos.btnReiniciar}
          onPress={reiniciarContador}
        >
          <Text style={estilos.btnText}>Reiniciar contador</Text>
        </TouchableOpacity>
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={estilos.th}>Nº Clic</Text>
            <Text style={estilos.th}>Hora</Text>
          </View>
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={estilos.td}>{item.numero}</Text>
                <Text style={estilos.td}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
  tarjeta: {
    width: "100%",
    maxWidth: 423,
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  tarjetaActiva: {
    backgroundColor: "#b4ddfa",
  },
  titulo: {
    color: "#022344",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descripcion: {
    color: "#464545",
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 17,
    textAlign: "center",
  },
  contador: {
    color: "#3498db",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contadorAlto: {
    color: "#e73c3c",
  },
  mensaje: {
    color: "#ff7f71",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 9,
    paddingHorizontal: 22,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  btnReiniciar: {
    backgroundColor: "#e74c3c",
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
