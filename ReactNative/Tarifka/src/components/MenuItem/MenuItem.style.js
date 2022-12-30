import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 5,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
  },
  body_container: {
    justifyContent: "center",
    padding: 5,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    textAlignVertical: "center",
  },
});
