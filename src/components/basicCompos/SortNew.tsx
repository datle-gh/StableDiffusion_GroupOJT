import { StyleSheet, View, TouchableOpacity, ViewStyle } from "react-native"
import React, { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Feather from "@expo/vector-icons/Feather"

type SortValue = "Newest First" | "Oldest First"

interface Styles {
  container: ViewStyle
  picker: ViewStyle
  iconContainer: ViewStyle
  iconBox: ViewStyle
}

const SortNew: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState<SortValue>("Newest First")

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedSort}
        style={styles.picker}
        onValueChange={(itemValue: SortValue) => setSelectedSort(itemValue)}
      >
        <Picker.Item label="Sort: Newest First" value="Newest First" />
        <Picker.Item label="Sort: Oldest First" value="Oldest First" />
      </Picker>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <Feather name="list" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Feather name="grid" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  picker: {
    height: 40,
    width: 200,
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginLeft: 10,
  },
})

export default SortNew
