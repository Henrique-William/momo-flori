import { Tabs } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

const home = require("@/assets/images/icons/home.png");
const homeActive = require("@/assets/images/icons/home-active.png");
const heart = require("@/assets/images/icons/heart.png");
const heartActive = require("@/assets/images/icons/heart-active.png");
const cart = require("@/assets/images/icons/cart.png");
const cartActive = require("@/assets/images/icons/cart-active.png");
const profile = require("@/assets/images/icons/profile.png");
const profileActive = require("@/assets/images/icons/profile-active.png");

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 84,
          position: "absolute",
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          borderWidth: 0,
          elevation: 4,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={homeActive} style={styles.icons} />
              ) : (
                <Image source={home} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#004643" : "#313A51" },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={heartActive} style={styles.icons} />
              ) : (
                <Image source={heart} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#004643" : "#313A51" },
                ]}
              >
                Favorito
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={cartActive} style={styles.icons} />
              ) : (
                <Image source={cart} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#004643" : "#313A51" },
                ]}
              >
                Carrinho
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={profileActive} style={styles.icons} />
              ) : (
                <Image source={profile} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#004643" : "#313A51" },
                ]}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  icons: {
    resizeMode: "contain",
    width: 32,
    height: 32,
  },
  iconText: {
    fontFamily: "InstrumentMedium",
    fontSize: 14,
  },
});
