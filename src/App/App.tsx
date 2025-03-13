import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import ToolMenu from "../components/basicCompos/ToolMenu"

// "main": "expo-router/entry",
//   "main": "index.ts",
export default function App() {
  return (
    <View style={styles.container}>
      <ToolMenu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
