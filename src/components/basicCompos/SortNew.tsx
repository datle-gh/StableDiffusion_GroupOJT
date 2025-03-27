import {
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native"
import React, { useEffect, useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Feather from "@expo/vector-icons/Feather"

type SortValue = "Newest First" | "Oldest First"
export type DisplayingType = "List" | "Grid"

interface SortNewProps<T> {
  defaultDesigns: T[]
  defaultDisplayType: DisplayingType
  onSorted: (sortedData: T[]) => void
  onDisplayTypeChange?: (type: DisplayingType) => void
}

/**
 * SortNew component provides sorting and display type controls for a list of designs.
 * It allows users to:
 * - Sort items by "Newest First" or "Oldest First"
 * - Toggle between "List" and "Grid" display types
 *
 * @template T - The type of data being sorted, which must include an `edited` timestamp field.
 *
 * @param defaultDesigns - The initial array of design data to display and sort.
 * @param onSorted - Callback function triggered after sorting, returns the sorted data.
 * @param onDisplayTypeChange - (Optional) Callback function triggered when display type changes ("List" or "Grid").
 */
const SortNew = <T extends { edited: number }>({
  defaultDesigns,
  defaultDisplayType,
  onSorted,
  onDisplayTypeChange,
}: SortNewProps<T>) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const [selectedSort, setSelectedSort] = useState<SortValue>("Newest First")
  const [displayType, setDisplayType] =
    useState<DisplayingType>(defaultDisplayType)

  const [data, setData] = useState<T[]>(defaultDesigns)
  // lưu trữ giá trị sort hiện tại

  const handleSort = (sortStype: SortValue) => {
    let sortedData = [...data]
    switch (sortStype) {
      case "Newest First":
        sortedData.sort((a, b) => a.edited - b.edited)
        break
      case "Oldest First":
        sortedData.sort((a, b) => b.edited - a.edited)
        break
      default:
        break
    }
    setData(sortedData)
    onSorted(sortedData)
  }

  useEffect(() => {
    handleSort(selectedSort)
  }, [])

  // hàm xử lý khi người dùng thay đổi sort
  const onChangeSortValue = (value: SortValue) => {
    setSelectedSort(value)
    handleSort(value)
  }

  const handleDisplayTypeChange = (type: DisplayingType) => {
    setDisplayType(type)
    onDisplayTypeChange && onDisplayTypeChange(displayType)
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  return (
    <View
      style={[styles.container, { paddingHorizontal: size.width * 0.03 }]}
      onLayout={onLayout}
    >
      {/* Sort */}
      <Picker
        selectedValue={selectedSort}
        style={styles.picker}
        onValueChange={onChangeSortValue}
      >
        <Picker.Item label="Sort: Newest First" value="Newest First" />
        <Picker.Item label="Sort: Oldest First" value="Oldest First" />
      </Picker>

      {/* Display type */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => handleDisplayTypeChange("List")}
        >
          <Feather
            name="list"
            size={size.width * 0.02}
            color={displayType === "List" ? "#000" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => handleDisplayTypeChange("Grid")}
        >
          <Feather
            name="grid"
            size={size.width * 0.02}
            color={displayType === "Grid" ? "#000" : "#ccc"}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingVertical: 10,
  },
  picker: {
    height: "100%",
    width: "14%",
    borderRadius: 10,
    padding: 4,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "100%",
  },
  iconBox: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 5,
  },
})

export default SortNew
