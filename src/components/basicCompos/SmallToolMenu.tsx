import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet, Image } from "react-native"
import Click from "../../../assets/image/icons/click.png"
import Layers from "../../../assets/image/icons/layers.png"
import Undo from "../../../assets/image/icons/undo.png"
import Redo from "../../../assets/image/icons/redo.png"

const SmallToolMenu = () => {
  const [selectedTool, setSelectedTool] = useState(0) // Lưu trạng thái công cụ được chọn

  // Các công cụ trong menu
  const tools = [
    { id: 1, icon: Click },
    { id: 2, icon: Layers },
    { id: 3, icon: Undo },
    { id: 4, icon: Redo },
  ]

  return (
    <View style={styles.container}>
      {tools.map((tool) => (
        <TouchableOpacity
          key={tool.id}
          style={[
            styles.toolButton,
            selectedTool === tool.id && styles.selectedButton, // Hiển thị trạng thái được chọn
          ]}
          onPress={() => setSelectedTool(tool.id)}
        >
          {/* Hình ảnh */}
          <Image
            source={tool.icon}
            style={[
              styles.icon,
              selectedTool === tool.id && styles.selectedIcon,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "transparent", // Làm nền trong suốt
    borderRadius: 12,
  },
  toolButton: {
    width: 70, // Kích thước cố định cho các nút
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: "#ffffff", // Nền khi được chọn
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  selectedIcon: {
    tintColor: "#000", // Màu icon khi được chọn
  },
})

export default SmallToolMenu
