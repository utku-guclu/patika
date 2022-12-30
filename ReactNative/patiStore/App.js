import { StyleSheet, Text, View } from "react-native";
import Products from "./src/components/Products/Products";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>PatiStore</Text>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 60,
  },
  textItem: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 50,
    textTransform: "uppercase",
  },
});
