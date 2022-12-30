import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    backgroundColor: "#e0e0e0",
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: deviceSize.width,
    minHeight: 200,
    resizeMode: "cover",
  },
  body_container: {
    overflow: "hidden",
    position: "relative",
  },
  title: {
    backgroundColor: "rgba(0,0,0,.5)",
    color: "white",
    position: "absolute",
    width: deviceSize.width,
    bottom: 0,
    padding: 5,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
