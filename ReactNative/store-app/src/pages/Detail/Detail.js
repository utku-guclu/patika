import React from "react";
import { View, Text, Image } from "react-native";
import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import styles from "./Detail.style";

const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    `${process.env.API_PRODUCT_URL}/${id}`
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
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
