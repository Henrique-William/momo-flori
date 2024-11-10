import {
  StyleSheet,
  TextInput,
  View,
  Pressable as TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useState } from "react";

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  function handleClick() {
    console.log(text);
  }

  return (
    <View style={styles.container}>
      {/* Condicional para exibir o placeholder somente se o input estiver vazio e desfocado */}
      {!isFocused && text === "" && (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderTitle}>Procurando uma planta?</Text>
          <Text style={styles.placeholder}>Ache sua planta favorita aqui</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPressIn={handleClick}
        onPressOut={() => setIsFocused(false)}
      >
        <Image
          source={require("@/assets/images/icons/lupa.png")}
          style={{ width: 12, height: 12 }}
        />
      </TouchableOpacity>

      <TextInput
        style={[
          styles.input,
          { opacity: !isFocused && text === "" ? 0 : 1 }, // Opacidade condicional
        ]}
        placeholder="Encontre sua planta favorita aqui" // Placeholder padrão
        placeholderTextColor="transparent" // Placeholder invisível para manter o espaço
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 32,
    width: "100%",
    height: 70,
  },
  input: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 100,
    paddingHorizontal: 18,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    elevation: 4, // Sombra para Android
  },
  placeholderContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 18,
    borderRadius: 100,
    backgroundColor: "#fff",
    elevation: 3,
  },
  placeholderTitle: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "InstrumentMedium",
  },
  placeholder: {
    color: "#797979",
    fontFamily: "Instrument",
    fontSize: 14,
  },
  button: {
    position: "absolute",
    right: 18,
    bottom: 17,
    backgroundColor: "#004643",
    width: 36,
    height: 36,
    padding: 12,
    borderRadius: 1000,
    zIndex: 1000,
    elevation: 3, // Sombra para Android
  },
});

export default Search;
