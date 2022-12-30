import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Card.style";

const Card = ({ number, text, courseGoals, setCourseGoals }) => {
  const check = () => {
    setCourseGoals(courseGoals.filter((item) => item.number !== number));
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Goal {number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity onPress={check} style={styles.button_container}>
        <Text style={styles.button_title}>CHECK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
