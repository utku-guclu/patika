import React from "react";
import { View, Text, Image, Button, Linking } from "react-native";
import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import styles from "./Detail.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({ route }) => {
  const { id } = route.params;

  const { loading, error, data } = useFetch(
    `${process.env.API_URL}/lookup.php?i=${id}`
  );

  // loading
  if (loading) {
    return <Loading />;
  }

  //error
  if (error) {
    return (
      <>
        <Error />
        <Text>{error}</Text>
      </>
    );
  }
  const meal = data.meals[0];
  const url = meal.strYoutube;
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      </View>
      <View style={styles.body_container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.sub_title}>{meal.strArea}</Text>
        <Text style={styles.desc}>{meal.strInstructions}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.button_title}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
