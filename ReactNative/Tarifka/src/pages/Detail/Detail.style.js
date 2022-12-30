import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: deviceSize.width,
    height: 250,
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    color: "#A52A2A",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  sub_title: {
    color: "#A52A2A",
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    paddingBottom: 5,
  },
  desc: {
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "justify",
    color: "black",
  },
  button: {
    backgroundColor: "#FF0000",
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  button_title: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
