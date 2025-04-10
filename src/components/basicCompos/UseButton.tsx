import { useState } from "react"
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  LayoutChangeEvent,
} from "react-native"

const UseButton = () => {
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setParentSize({ width, height })
  }

  const fontSize = parentSize.height ? parentSize.height * 0.45 : 16

  return (
    <TouchableOpacity style={styles.container} onLayout={onLayout}>
      <Text style={[styles.text, { fontSize: fontSize }]}>Use</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
})

export default UseButton
