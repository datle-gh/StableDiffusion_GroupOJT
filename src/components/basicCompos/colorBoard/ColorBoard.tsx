import React, { useState } from "react"
import { View, StyleSheet, FlatList } from "react-native"
import ColorModeEditor from "../bigEditor/ColorModeEditor"
import ColorMixer from "./ColorMixer"
import ColorSwatches from "./ColorSwatches"

/**
 *  ColorBoard component
 * @description - A color board component that allows users to select a color from a color swatches or a color mixer
 * @param value - The initial color value
 * @param onColorSelect - The callback function when a color is selected
 * @returns
 */
const ColorBoard = ({
  value,
  onColorSelect,
}: {
  value: string
  onColorSelect: (color: string) => void
}) => {
  const [mode, setMode] = useState<string | undefined>("Swatches")
  const [selectedColor, setSelectedColor] = useState(value)

  // Xử lý chọn màu từ Swatches
  const selectColor = (color: string) => {
    setSelectedColor(color)
    onColorSelect(color)
  }

  return (
    <View style={styles.container}>
      {/* Thanh chọn chế độ */}
      <View style={styles.tabContainer}>
        <ColorModeEditor
          onChangeMode={(mode) => {
            setMode(mode)
            console.log(mode)
          }}
        />
      </View>
      {/* Chế độ Swatches */}
      {mode === "Swatches" ? (
        <View>
          <ColorSwatches onColorChange={selectColor} value={selectedColor} />
        </View>
      ) : (
        // Chế độ Color Mixer
        <View style={styles.mixerContainer}>
          <ColorMixer onColorChange={selectColor} value={selectedColor} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
  },
  mixerContainer: {
    width: "200%",
  },
})

export default ColorBoard
