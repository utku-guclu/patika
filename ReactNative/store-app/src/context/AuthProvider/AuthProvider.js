import { useEffect, useState } from "react";

import { Provider } from "react-redux";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // promise => .then
    AsyncStorage.getItem("@user").then((userSession) => {
      console.log(userSession);
      if (userSession) {
        try {
          setUser(JSON.parse(userSession));
        } catch (error) {
          console.log(error);
        } finally {
          setIsAuthLoading(false);
        }
      }
    });
  });

  const reducer = reducers;
  const preloadedState = {
    user,
    isAuthLoading,
  };

  const store = configureStore({
    reducer,
    preloadedState,
  });
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
