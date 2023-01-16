import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import JobBoard from "./pages/JobBoard";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
// import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Favorites from "./pages/Favorites";

const Stack = createStackNavigator();

// Router
const Router = () => {
  // const userSession = useSelector((s) => s.user);
  // const isAuthLoading = useSelector((s) => s.isAuthLoading);
  // const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: "Favorite Jobs",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="JobBoard"
          component={JobBoard}
          options={{
            title: "Jobs",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Job Detail",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
