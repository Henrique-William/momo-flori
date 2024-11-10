import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface CategoryItem {
  title: string;
  image: React.ReactNode;
  imageFilled: React.ReactNode;
}

interface FiltersProps {
  category: CategoryItem[];
}

function Filters({ category }: FiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category[0]?.title || null
  );

  const handlePress = (item: string) => {
    setSelectedCategory(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => handlePress(item.title)}
          >
            {item.title === selectedCategory ? item.imageFilled : item.image}
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    item.title === selectedCategory ? "#004643" : "#7C7C7C",
                },
                {
                  fontFamily:
                    item.title === selectedCategory
                      ? "InstrumentMedium"
                      : "Instrument",
                },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  categoryButton: {
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 18,
  },
});

export default Filters;
