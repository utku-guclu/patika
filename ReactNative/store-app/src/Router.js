import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

// Router
const Router = () => {
  const userSession = useSelector((s) => s.user);
  const isAuthLoading = useSelector((s) => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: "Shoppy",
              headerStyle: { backgroundColor: "#64b5f6" },
              headerTitleStyle: { color: "white" },
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="white"
                  onPress={() => dispatch({ type: "REMOVE_USER" })}
                />
              ),
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
