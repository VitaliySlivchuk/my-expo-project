import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingBottom: 78,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    width: "100%",

    padding: 16,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 33,
  },
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
  },
  buttonText: {
    color: "#fff",
  },
  acc: {
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;
