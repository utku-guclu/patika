import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./src/pages/Menu";
import Detail from "./src/pages/Detail";
import Meals from "./src/pages/Meals";

const Stack = createStackNavigator();

// Router
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MenuPage"
          component={Menu}
          options={{
            title: "Categories",
            headerStyle: { backgroundColor: "#FFA500" },
            headerTitleStyle: { color: "white" },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: "Meals",
            headerStyle: { backgroundColor: "#FFA500" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "#FFA500" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
