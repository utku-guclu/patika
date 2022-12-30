import { useState } from "react";
import { View, Text, Button } from "react-native-web";

import styles from "./Todo.styles";

function Todo({ todo, deleteTodo }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => setIsDone(!isDone)}
        style={
          isDone && {
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
          }
        }
      >
        {todo}
      </Text>
      <Button onPress={deleteTodo} color={"black"} title="x" />
    </View>
  );
}

export default Todo;
