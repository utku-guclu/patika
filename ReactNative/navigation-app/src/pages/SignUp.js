import React, { useState } from "react";
import { View, Text, Alert } from "react-native-web";

import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [mail, setMail] = useState(null);

  function handleSubmit() {
    if (!username || !surname || !age || !mail) {
      Alert.alert("check your form!");
      console.log("check your form!");
      return;
    }
    const user = {
      username,
      surname,
      age,
      mail,
    };
    navigation.navigate("result", user);
  }

  return (
    <View>
      {/* <Text>Sign Up</Text> */}
      <Input label="Name" placeholder="your name" onChangeText={setUsername} />
      <Input
        label="Surname"
        placeholder="your surname"
        onChangeText={setSurname}
      />
      <Input label="age" placeholder="your age" onChangeText={setAge} />
      <Input label="email" placeholder="your e-mail" onChangeText={setMail} />
      <Button text="Register" onPress={handleSubmit} />
    </View>
  );
}
