import AsyncStorage from "@react-native-async-storage/async-storage";

export default function reducers(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      if (user) {
        AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        AsyncStorage.removeItem("@user");
      }
      return { ...state, user };
    default:
      return state;
  }
}
