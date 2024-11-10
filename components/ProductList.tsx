import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import LikeBtn from "./LikeBtn";
import { useNavigation } from "@react-navigation/native";
import { ProductInfoNavigationProp } from "@/navigation";
import { Product } from "@/sevices/productService";

interface Props {
  list: Product[];
}

function ProductList({ list }: Props) {
  const navigation = useNavigation<ProductInfoNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        horizontal
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            
            <LikeBtn likeValue={item.isLiked} />

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("productInfo", { id: item._id })
              }
              style={{ width: "100%", height: "100%" }}
            >
              <View
                style={[styles.imageHolder, { backgroundColor: item.color }]}
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.subTitle} numberOfLines={1}>
                  {item.subtitle}
                </Text>
                <View style={styles.footer}>
                  <Text style={styles.category}>{item.category}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceSymbol}>R$</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flex: 1,
  },
  productContainer: {
    position: "relative",
    height: 346,
    width: 200,
    marginRight: 16,
    borderRadius: 16,
  },
  imageHolder: {
    position: "relative",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 14,
  },
  productImage: {
    resizeMode: "contain",
    width: '80%',
    height: "80%",
  },
  infoContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 18,
  },
  title: {
    fontFamily: "InstrumentSemiBold",
    fontSize: 16,
  },
  subTitle: {
    fontFamily: "Instrument",
    color: "#828282",
    fontSize: 14,
  },
  category: {
    fontSize: 12,
    fontFamily: "Instrument",
    color: "#004643",
    borderWidth: 1,
    padding: 4,
    borderRadius: 100,
    borderColor: "#004643",
    textAlign: "center",
    textAlignVertical: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  priceSymbol: {
    fontSize: 16,
    fontFamily: "InstrumentMedium",
  },
  price: {
    fontFamily: "InstrumentMedium",
    fontSize: 36,
  },
});

export default ProductList;
