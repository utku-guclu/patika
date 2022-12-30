import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from "./MenuItem.style";

const MenuItem = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.strCategoryThumb }}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuItem;
