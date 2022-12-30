import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

export default function Welcome({ navigation }) {
  // navigation built-in prop
  function navigateToPage() {
    navigation.navigate("signup", { username: "lyshitski" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coffee Shop</Text>
      <Button text="Sign up" onPress={navigateToPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 39,
    fontWeight: "bold",
    margin: 10,
  },
});
