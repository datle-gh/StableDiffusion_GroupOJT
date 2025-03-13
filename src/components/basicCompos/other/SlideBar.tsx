import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Slider } from "@miblanchard/react-native-slider"

interface SliderProps {
  label?: string
  maximumValue?: number
  minimumValue?: number
  initialValue?: number
  fixedPoint?: number
  step?: number
  isPercent?: boolean
  onValueChange: (value: number) => void
}

/**
 * Component Slide Bar
 * @param label Nhãn hiển thị cho Slider
 * @param maximumValue Giá trị lớn nhất của Slider
 * @param minimumValue Giá trị nhỏ nhất của Slider
 * @param fixedPoint Số chữ số thập phân
 * @param step Bước nhảy khi kéo Slider
 * @param isPercent Hiển thị giá trị dưới dạng phần trăm
 * @param onValueChange Hàm callback trả về giá trị khi thay đổi
 */
const SlideBar: React.FC<SliderProps> = ({
  label = "Unknown slide",
  minimumValue = 0,
  maximumValue = 100,
  initialValue = 0,
  fixedPoint = 0,
  step,
  isPercent = true,
  onValueChange,
}) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (val: number | number[]) => {
    const newValue = Array.isArray(val) ? val[0] : val
    setValue(newValue)
    onValueChange(newValue)
  }

  const fixedValue = value.toFixed(fixedPoint)

  return (
    <View style={styles.container}>
      <View style={styles.slideInfo}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueBox}>
          <Text style={styles.value}>
            {isPercent ? `${fixedValue}%` : `${fixedValue}`}
          </Text>
        </View>
      </View>
      <Slider
        minimumValue={minimumValue}
        minimumTrackTintColor="#CFEB92"
        maximumValue={maximumValue}
        maximumTrackTintColor="gray"
        value={value}
        step={step}
        onValueChange={handleChange}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
    alignItems: "stretch",
    justifyContent: "center",
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#CFEB92",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },
  track: {
    height: 20,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  slideInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#333",
  },
  valueBox: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    width: "25%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    color: "#333",
  },
})
export default SlideBar
