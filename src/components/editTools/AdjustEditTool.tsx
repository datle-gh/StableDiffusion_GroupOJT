import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native"
import SlideBar from "../basicCompos/other/SlideBar"
import SwatchesIcon from "../../../assets/image/icons/swatches.png"
import ColorMixerIcon from "../../../assets/image/icons/color-mixer.png"
import Ima12 from "../../../assets/image/icons/ima12.png"
import Ima13 from "../../../assets/image/icons/ima13.png"
import Ima14 from "../../../assets/image/icons/ima14.png"
import ColorBoard from "../basicCompos/colorBoard/ColorBoard"
import Feather from "@expo/vector-icons/Feather"
const resetSettings = () => {
  console.log("Reset settings to default")
  // Thêm logic reset giá trị của các thanh trượt và chế độ màu tại đây
}
const AdjustEditTool = () => {
  const [selectedMode, setSelectedMode] = useState("Swatches")
  const [selectedImage, setSelectedImage] = useState("ima12")
  const translateX = useState(new Animated.Value(0))[0]
  const imageTranslateX = useState(new Animated.Value(0))[0]
  const [color, setColor] = useState("#ff0000")
  const toggleMode = (mode: string) => {
    setSelectedMode(mode)
    Animated.timing(translateX, {
      toValue: mode === "Swatches" ? 0 : 90,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const toggleImage = (image: string, position: number) => {
    setSelectedImage(image)
    Animated.timing(imageTranslateX, {
      toValue: position,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.title}>Selective Color</Text>
      <View style={styles.graphPlaceholder} />
      <SlideBar
        label="Highlights"
        initialValue={100}
        onValueChange={() => {}}
      />
      <SlideBar label="Shadows" initialValue={100} onValueChange={() => {}} />

      <Text style={styles.title}>Color Balance</Text>
      <ColorBoard
        value={color}
        onColorSelect={(newColor) => setColor(newColor)}
      />
      <TouchableOpacity style={styles.resetButton} onPress={resetSettings}>
        <Feather
          name="refresh-ccw"
          size={24}
          color="black"
          style={styles.resetIcon}
        />
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
      {/* Image Sliding Button */}
      <Text style={styles.title}>Focus</Text>
      <View style={styles.imageToggleContainer}>
        <Animated.View
          style={[
            styles.imageSlider,
            { transform: [{ translateX: imageTranslateX }] },
          ]}
        />
        <TouchableOpacity
          style={styles.imageOption}
          onPress={() => toggleImage("ima12", 0)}
        >
          <Image source={Ima12} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageOption}
          onPress={() => toggleImage("ima13", 90)}
        >
          <Image source={Ima13} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageOption}
          onPress={() => toggleImage("ima14", 180)}
        >
          <Image source={Ima14} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <SlideBar
        label="Blur Amount"
        initialValue={40}
        onValueChange={() => {}}
      />
      <SlideBar
        label="Gamma Correction"
        initialValue={40}
        onValueChange={() => {}}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  graphPlaceholder: {
    height: 80,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    padding: 4,
    width: 180,
    alignSelf: "center",
    position: "relative",
    marginBottom: 20,
  },
  slider: {
    position: "absolute",
    width: 90,
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    left: 4,
  },
  imageToggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    padding: 4,
    width: 270,
    alignSelf: "center",
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
  },
  imageSlider: {
    position: "absolute",
    width: 90,
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    left: 4,
  },
  imageOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    zIndex: 2,
  },
  toggleOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    zIndex: 2,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  toggleText: {
    fontSize: 12,
    color: "#666",
  },
  selectedText: {
    color: "#000",
    fontWeight: "bold",
  },
  resetButton: {
    flexDirection: "row", // Sắp xếp icon và chữ theo hàng ngang
    alignItems: "center", // Căn giữa icon và chữ theo chiều dọc
    justifyContent: "center", // Căn giữa theo chiều ngang
    width: 100,
    height: 40,
    backgroundColor: "#FFFFFF", // Nền trắng
    borderRadius: 30, // Bo góc nhẹ
    borderWidth: 1, // Viền mỏng
    alignSelf: "center", // Căn giữa theo chiều ngang
    marginVertical: 10, // Khoảng cách trên dưới
  },
  resetIcon: {
    marginRight: 5, // Tạo khoảng cách giữa icon và chữ
  },
  resetText: {
    fontSize: 14,
  },
})

export default AdjustEditTool
