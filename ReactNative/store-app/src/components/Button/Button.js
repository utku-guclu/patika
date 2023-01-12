import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ActivityIndicator } from "react-native-web";

import styles from "./Button.style";

const Button = ({ text, loading, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="black" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
