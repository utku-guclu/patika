import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from "./MealItem.style";

const MealItem = ({ meal, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealItem;
