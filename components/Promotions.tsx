import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Promotions() {
  return (
    <LinearGradient
      colors={["#E2E9FF", "#FFEAEA"]} // Defina as cores do gradiente
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientContainer}
    >
      <Image
        style={styles.image}
        source={require("@/assets/images/moto.png")}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 4,
          paddingLeft: 24,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: "MontserratBold" }}>
          Frete Grátis
        </Text>
        <View style={styles.subtitle}>
          <Text
            style={{
              color: "#808080",
              fontFamily: "MontserratMedium",
              fontSize: 14,
            }}
          >
            Comprando
          </Text>
          <Text style={styles.price}>+ R$ 40</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    position: "relative",
    height: 100,
    width: "100%",
    borderRadius: 16,
    marginTop: 40,
  },
  image: {
    position: "absolute",
    right: 8,
    bottom: 0,
    height: 140,
    width: 140,
    resizeMode: "cover",
  },
  subtitle: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  price: {
    color: "#fff",
    backgroundColor: "#FFBB56",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontFamily: "MontserratMedium",
  },
});
