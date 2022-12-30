import { View, Text, StyleSheet } from "react-native";

export default function Result({ route }) {
  const { username, surname, age, mail } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.label}>Name: {username}</Text>
      <Text style={styles.label}>Surname: {surname}</Text>
      <Text style={styles.label}>Age: {age}</Text>
      <Text style={styles.label}>E-mail: {mail}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 5,
  },
});
