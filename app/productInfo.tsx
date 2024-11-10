import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, ScrollView } from 'react-native';
import { fetchProducts, Product } from '@/sevices/productService';

import { Link, useLocalSearchParams } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AddToCartBtn from "@/components/AddToCartBtn";

export default function ProductInfo() {
  const { id } = useLocalSearchParams();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadProducts = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.error('Erro ao carregar produtos:', error);
        } finally {
          setLoading(false);
        }
      };

      loadProducts();
    }, []);

    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
    }

    const numericId = id;

    // Usando `find` em vez de `filter` para obter o item diretamente
    const currentProduct = products.find((plant) => plant._id.toString() === numericId);

    return (
      <View style={styles.container}>
        <Link
          href={".."}
          style={{ position: "absolute", left: 24, top: 24, zIndex: 100 }}
        >
          <Entypo name="chevron-left" size={28} color="#004643" />
        </Link>

        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <View style={styles.imageContainer}>
            <View
              style={[
                { backgroundColor: currentProduct?.color },
                { width: "100%", height: "85%" },
              ]}
            ></View>
            <Image source={{uri: currentProduct?.image}} style={styles.image} />
          </View>

          <View style={styles.infoContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "column", gap: 8 }}>
                <Text
                  style={{ fontFamily: "InstrumentSemiBold", fontSize: 24 }}
                  numberOfLines={1}
                >
                  {currentProduct?.title}
                </Text>
                <Text>{currentProduct?.subtitle}</Text>
              </View>
              <Text style={styles.category}>{currentProduct?.category}</Text>
            </View>

            <View style={styles.names}>
              <View style={styles.bioName}>
                <Text
                  style={{
                    fontFamily: "Instrument",
                    fontSize: 12,
                    color: "#828282",
                  }}
                >
                  Nome Botânico
                </Text>
                <Text style={{ fontFamily: "InstrumentSemiBold", fontSize: 16 }}>
                  {currentProduct?.biotanicalName}
                </Text>
              </View>
              <View style={{ flexDirection: "column", marginLeft: 16 }}>
                <Text
                  style={{
                    fontFamily: "Instrument",
                    fontSize: 12,
                    color: "#828282",
                  }}
                >
                  Nome Popular
                </Text>
                <Text style={{ fontFamily: "InstrumentSemiBold", fontSize: 16 }}>
                  {currentProduct?.title}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", gap: 12 }}>
              <Text style={{ fontFamily: "InstrumentMedium", fontSize: 24 }}>
                Descrição
              </Text>
              <Text
                style={{
                  fontFamily: "Instrument",
                  fontSize: 12,
                  textAlign: "justify",
                }}
              >
                {currentProduct?.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <AddToCartBtn price={currentProduct?.price} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      position: "relative",
      flex: 1,
      backgroundColor: "#fff",
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContentContainer: {
      flexGrow: 1, // Permite que o conteúdo cresça e habilite o scroll
      paddingBottom: 150, // Ajuste o valor conforme necessário
    },
    imageContainer: {
      position: "relative",
      height: "50%",
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      position: "absolute",
      height: "90%",
      width: "70%",
      resizeMode: "contain",
      bottom: 0,
    },
    infoContainer: {
      flexDirection: "column",
      gap: 28,
      paddingTop: 32,
      paddingHorizontal: 20,
    },
    category: {
      fontFamily: "Instrument",
      color: "#004643",
      borderWidth: 1,
      borderColor: "#004643",
      padding: 6,
      borderRadius: 100,
      textAlign: "center",
    },
    names: {
      flexDirection: "row",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#EEEEEE",
      paddingVertical: 14,
    },
    bioName: {
      flexDirection: "column",
      borderRightWidth: 1,
      borderColor: "#EEEEEE",
      paddingRight: 16,
    },
  })
