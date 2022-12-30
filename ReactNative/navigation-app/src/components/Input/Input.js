import React from "react";
import { View, Text, TextInput } from "react-native-web";

import styles from "./Input.style";

const Input = ({ label, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.placeholder}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default Input;
