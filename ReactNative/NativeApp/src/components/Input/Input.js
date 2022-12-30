import { View, TextInput, Button } from "react-native";

import { useState } from "react";

import styles from "./Input.style";

const Input = ({ courseGoals, setCourseGoals }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
        number: currentGoals.length + 1,
      },
    ]);
    setEnteredGoalText("");
  };
  return (
    <View styles={styles.inputContainer}>
      <TextInput
        styles={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="add a goal"
        value={enteredGoalText}
      />
      <Button
        color="lightcoral"
        title="Add Goal"
        onPress={addGoalHandler}
        disabled={courseGoals.length >= 3 ? true : false}
      />
    </View>
  );
};

export default Input;
