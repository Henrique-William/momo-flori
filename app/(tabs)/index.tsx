import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Platform, ActivityIndicator } from "react-native";
import { fetchProducts, Product } from '@/sevices/productService';

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import ProductList from "@/components/ProductList";
import Filters from "@/components/Filters";

export default function Index() {
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
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="dark" />
        {/* Header */}
        <HomeHeader />
        <Search />
        <Filters
          category={[
            {
              title: "For You",
              image: (
                <Ionicons name="sparkles-outline" size={24} color="#7C7C7C" />
              ),
              imageFilled: (
                <Ionicons name="sparkles-sharp" size={24} color="#004643" />
              ),
            },
            {
              title: "Indoor",
              image: <Ionicons name="home-outline" size={24} color="#7C7C7C" />,
              imageFilled: <Ionicons name="home" size={24} color="#004643" />,
            },
            {
              title: "Outdoor",
              image: (
                <Ionicons name="compass-outline" size={24} color="#7C7C7C" />
              ),
              imageFilled: <Ionicons name="compass" size={24} color="#004643" />,
            },
            {
              title: "Garden",
              image: <Ionicons name="leaf-outline" size={24} color="#7C7C7C" />,
              imageFilled: <Ionicons name="leaf" size={24} color="#004643" />,
            },
          ]}
        />
        <ProductList list={products} />

        {/* Espaço extra para garantir que o conteúdo não fique atrás da barra de navegação */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'android' ? 84 : 84, // Ajuste de margem inferior específico para Android
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
