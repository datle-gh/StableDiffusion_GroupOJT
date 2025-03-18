import React, { useState } from "react"
import { View, StyleSheet, ImageSourcePropType } from "react-native"
import window_maximize from "../../../assets/icons/menu-top/window-maximize.png"
import adjustments_horizontal from "../../../assets/icons/menu-top/adjustments-horizontal.png"
import eraser from "../../../assets/icons/menu-top/eraser.png"
import resize from "../../../assets/icons/menu-top/resize.png"
import FrameButton from "./FrameButton"

interface Tool {
  label: string
  icon: ImageSourcePropType
}

const ToolMenu = () => {
  const [selectedTool, setSelectedTool] = useState(-1)

  const tools: Tool[] = [
    { label: "Upscale", icon: window_maximize },
    { label: "Adjust", icon: adjustments_horizontal },
    { label: "Eraser", icon: eraser },
    { label: "Extend", icon: resize },
  ]

  return (
    <View style={styles.container}>
      {tools.map((tool, index) => (
        <React.Fragment key={index}>
          <FrameButton
            index={index}
            imageUrl={tool.icon}
            label={tool.label}
            isSelected={selectedTool === index}
            onPress={(idx) => setSelectedTool(idx)}
          />
          {index < tools.length - 1 && <View style={styles.separator} />}
        </React.Fragment>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "transparent",
    borderRadius: 12,
  },
  separator: {
    width: 1,
    height: "30%",
    backgroundColor: "#eae7e7",
    marginHorizontal: 8,
  },
})

export default ToolMenu
