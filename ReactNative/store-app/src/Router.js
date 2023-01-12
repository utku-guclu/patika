import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

// Router
const Router = () => {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userSession ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: "Shoppy",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: "Detail",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
                headerTintColor: "white",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
