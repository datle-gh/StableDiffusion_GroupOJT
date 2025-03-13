import React, { useState } from "react"
import { View, StyleSheet, ImageSourcePropType } from "react-native"
import Image2 from "../../../assets/image/icons/image2.png"
import Image3 from "../../../assets/image/icons/image3.png"
import Image4 from "../../../assets/image/icons/image4.png"
import Image5 from "../../../assets/image/icons/image5.png"
import FrameButton from "./FrameButton"

interface Tool {
  label: string
  icon: ImageSourcePropType
}

const ToolMenu = () => {
  const [selectedTool, setSelectedTool] = useState(-1)

  const tools: Tool[] = [
    { label: "Upscale", icon: Image2 },
    { label: "Adjust", icon: Image3 },
    { label: "Eraser", icon: Image4 },
    { label: "Extend", icon: Image5 },
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
