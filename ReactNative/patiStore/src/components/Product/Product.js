import { Image, View, Text } from "react-native";

import styles from "./Product.style";

const Product = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.imgURL }} />
      <Text style={styles.title}>{product.title}</Text>
      {!product.inStock ? (
        <Text style={styles.stock}>STOKTA YOK</Text>
      ) : (
        <Text style={styles.price}>{product.price}</Text>
      )}
    </View>
  );
};

export default Product;
