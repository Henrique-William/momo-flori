import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Price {
  price: number | undefined;
}

export default function AddToCartBtn({ price }: Price) {
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "#fff"]}
      style={[styles.container, { backgroundColor: "transparent" }]}
    >
      <TouchableOpacity style={styles.button}>
        <View style={styles.price}>
          <Text
            style={{
              fontFamily: "InstrumentMedium",
              fontSize: 16,
              color: "#fff",
            }}
          >
            R${price}
          </Text>
          <Text
            style={{ fontFamily: "Instrument", fontSize: 12, color: "#CBCBCB" }}
          >
            Preço
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "InstrumentMedium",
            fontSize: 16,
            color: "#fff",
            textAlign: "center",
            width: "100%",
          }}
        >
          Adicionar ao Carrinho
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "column-reverse",
    height: 118,
    paddingBottom: 20,
    bottom: 0,
  },
  button: {
    backgroundColor: "#004643", // Cor do botão
    paddingHorizontal: 32,
    borderRadius: 100,
    width: "100%",
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#fff",
    paddingRight: 8,
  },
});
