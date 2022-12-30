import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Welcome from "./src/pages/Welcome";
import SignUp from "./src/pages/SignUp";
import Result from "./src/pages/Result";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="welcome"
          component={Welcome}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="result" component={Result} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
