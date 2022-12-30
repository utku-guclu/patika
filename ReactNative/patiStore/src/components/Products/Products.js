import { FlatList, View } from "react-native";

import data from "../../data";
import Product from "../Product";

import styles from "./Products.style";

const Products = () => {
  const renderProduct = ({ item }) => <Product product={item} />;
  const renderKey = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={renderKey}
      />
    </View>
  );
};

export default Products;
