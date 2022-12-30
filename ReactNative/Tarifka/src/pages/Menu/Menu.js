import React from "react";
import { View, Text, FlatList } from "react-native";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import useFetch from "../../hooks/useFetch";
import MenuItem from "../../components/MenuItem";

const Menu = ({ navigation }) => {
  const { loading, data, error } = useFetch(
    `${process.env.API_URL}/categories.php`
  );
  const handleProductSelect = (title) => {
    navigation.navigate("MealsPage", { title });
  };

  const renderProduct = ({ item }) => (
    <MenuItem
      product={item}
      onSelect={() => handleProductSelect(item.strCategory)}
    />
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
      <FlatList data={data.categories} renderItem={renderProduct} />
    </View>
  );
};

export default Menu;
