import React from "react";
import { TouchableOpacity, Text } from "react-native-web";

import styles from "./Button.style";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.container}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
