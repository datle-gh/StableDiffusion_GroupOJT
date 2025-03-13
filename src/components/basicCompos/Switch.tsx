import React, { useState, useEffect } from "react"
import { Animated, TouchableWithoutFeedback, StyleSheet } from "react-native"

/**
 * Component Switch Button
 * @param onValueChange Hàm xử lý khi giá trị của Switch thay đổi
 * @param backgroundActive Màu nền khi Switch bật
 * @param backgroundInactive Màu nền khi Switch tắt
 * @param circleActiveColor Màu nền của nút tròn khi Switch bật
 * @param circleInActiveColor Màu nền của nút tròn khi Switch tắt
 * @param switchWidth Chiều rộng của Switch
 * @param switchHeight Chiều cao của Switch
 * @param circleSize Kích thước của nút tròn
 * @param disabled Khóa Switch
 */
const Switch = ({
  onValueChange = (val: boolean) => {},
  defaultVal = false,
  backgroundActive = "#CFEB92",
  backgroundInactive = "gray",
  circleActiveColor = "white",
  circleInActiveColor = "white",
  switchWidth = 40,
  switchHeight = 20,
  circleSize = 12,
  disabled = false,
}) => {
  const [switchValue, setSwitchValue] = useState(defaultVal)
  const translateX = useState(
    new Animated.Value(switchValue ? switchWidth - circleSize - 2 : 2)
  )[0]

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: switchValue ? switchWidth - circleSize - 6 : 2,
      duration: 100,
      useNativeDriver: false,
    }).start()
  }, [switchValue])

  const handleSwitch = () => {
    if (disabled) return
    setSwitchValue(!switchValue)
    onValueChange(!switchValue)
  }

  return (
    <TouchableWithoutFeedback onPress={handleSwitch}>
      <Animated.View
        style={[
          styles.switchContainer,
          {
            backgroundColor: switchValue
              ? backgroundActive
              : backgroundInactive,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              width: circleSize,
              height: circleSize,
              backgroundColor: switchValue
                ? circleActiveColor
                : circleInActiveColor,
              transform: [{ translateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    position: "relative",
    borderRadius: 50,
    width: 40,
    height: 20,
  },
  circle: {
    position: "absolute",
    borderRadius: 50,
  },
})

export default Switch
