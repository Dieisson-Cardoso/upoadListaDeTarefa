import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkmark: {
    fontSize: 20,
    color: "#0c0",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btnRemover: {
    padding: 5,
    backgroundColor: "#ffcccc",
    borderRadius: 5,
    marginLeft: 10,
  },
  btnRemoverText: {
    color: "#f00",
    fontWeight: "bold",
  },
});
