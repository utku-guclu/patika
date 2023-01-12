import { useDispatch } from "react-redux";

import React, { useState } from "react";
import { View, Image } from "react-native";

// johnd m38rmF$

// import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../../components/Button";
import Input from "../../components/Input";

import styles from "./Login.style";

import usePost from "../../hooks/usePost";
import { Alert } from "react-native-web";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const initialState = { username: "", password: "" };

  const [values, setValues] = useState({});

  const { data, loading, error, post } = usePost();

  function handleLogin(values) {
    post(process.env.API_AUTH_URL + "/login", values);
    setValues(initialState);
  }

  if (error) {
    console.log(error);
    Alert.alert("Store", "Error!");
  }

  if (data.token) {
    dispatch({ type: "SET_USER", payload: { data } });
    navigation.navigate("ProductsPage");
  } else {
    Alert.alert("something is wrong!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.body_container}>
        <Input
          placeholder="username"
          value={values.username}
          onType={(e) => setValues({ ...values, username: e })}
        />
        <Input
          placeholder="password"
          value={values.password}
          onType={(e) => setValues({ ...values, password: e })}
        />
        <Button
          text="Login"
          onPress={() => handleLogin(values)}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default Login;
