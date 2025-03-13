import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import ColorPicker, {
  OpacitySlider,
  Panel3,
  Panel5,
} from "reanimated-color-picker"
import colorpicker from "../../../../assets/icons/color-board/color-picker.png"

interface ColorSwatchesProps {
  onColorChange: (color: string) => void
  value?: string
}

/**
 *  ColorSwatches component
 * @description ColorSwatches component is used to select a color from a color picker and set the opacity of the color
 * @param onColorChange - Function to handle color change
 * @param value - Initial color value
 * @returns
 */
const ColorSwatches: React.FC<ColorSwatchesProps> = ({
  value,
  onColorChange,
}) => {
  const [color, setColor] = useState(value)
  const [opacity, setOpacity] = useState(100)

  const handleColorChange = (selectedColor: { hex: string; rgba: string }) => {
    setColor(selectedColor.hex)

    // Extract the opacity from the rgba string (rgba(r, g, b, a))
    const rgbaMatch = selectedColor.rgba.match(
      /rgba?\(\d+, \d+, \d+, ([\d.]+)\)/
    )
    const newOpacity = rgbaMatch
      ? Math.round(parseFloat(rgbaMatch[1]) * 100)
      : 100
    setOpacity(newOpacity)

    const rgbaColor = hexToRgba(selectedColor.hex, newOpacity / 100)
    onColorChange(rgbaColor)
  }

  // Function to convert HEX to RGBA
  const hexToRgba = (hex: string, alpha: number): string => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <View style={styles.container}>
      <ColorPicker
        style={styles.picker}
        value={color}
        onChange={handleColorChange}
      >
        <Panel5 style={styles.panel} />
        <View style={styles.opacitySlider}>
          <Image source={colorpicker} style={styles.icon} />
          <View style={styles.sliderContainer}>
            <OpacitySlider
              style={styles.slider}
              thumbSize={30}
              boundedThumb={true}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{opacity}%</Text>
          </View>
        </View>
      </ColorPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    width: "30%",
    height: "30%",
  },
  panel: {
    width: 250,
  },
  opacitySlider: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  icon: {
    width: "10%",
    height: "80%",
    marginRight: 10,
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: 140,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
    padding: 5,
  },
  text: {
    fontSize: 18,
    alignItems: "center",
  },
})

export default ColorSwatches
