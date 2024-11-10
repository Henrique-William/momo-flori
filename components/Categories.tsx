import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

function Categories() {
  const handleClick = () => {
    console.log("Pressionado")
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={{fontFamily: 'MontserratMedium', color: '#808080', fontSize: 16}}>Popularity</Text>
        <AntDesign name="arrowdown" color={"#808080"} size={14}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default Categories;
