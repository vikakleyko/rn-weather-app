import { StyleSheet, View } from "react-native";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <View style={styles.container}>
      <Forecast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8eeff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
