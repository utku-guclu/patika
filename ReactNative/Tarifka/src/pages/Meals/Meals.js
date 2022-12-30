import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealItem from "../../components/MealItem";

const Meals = ({ route, navigation }) => {
  const { title } = route.params;
  const { loading, error, data } = useFetch(
    `${process.env.API_URL}/filter.php?c=${title}`
  );

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <MealItem meal={item} onSelect={() => handleProductSelect(item.idMeal)} />
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

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderProduct} />
    </View>
  );
};

export default Meals;
