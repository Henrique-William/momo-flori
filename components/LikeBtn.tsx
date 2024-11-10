import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, TouchableOpacity } from "react-native";

interface StatusLike {
  likeValue: boolean;
}

function LikeBtn({likeValue}: StatusLike) {
  const [isLiked, setIsLiked] = useState<boolean>(likeValue);

  function handleLiked() {
    setIsLiked((prev) => !prev);
  }

  return (
    <TouchableOpacity style={styles.likeBtn} onPress={handleLiked}>
      <AntDesign
        name={isLiked ? "heart" : "hearto"}
        size={16}
        color={isLiked ? "#F47776" : "black"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  likeBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 100,
    justifyContent: "center",
    right: 14,
    top: 14,
    zIndex: 100,
  },
});

export default LikeBtn;
