import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Goals from "./src/components/Goals";
import Input from "./src/components/Input";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  return (
    <View style={styles.container}>
      <Input courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      <Goals courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
});
