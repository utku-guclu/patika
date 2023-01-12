import React from "react";
import { View, Text, FlatList } from "react-native";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import ProductCard from "../../components/ProductCard";

import useFetch from "../../hooks/useFetch";

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(process.env.API_PRODUCT_URL);

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
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
      <FlatList data={data && data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
