import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { AntDesign } from "@expo/vector-icons"

// Định nghĩa kiểu dữ liệu cho option trong dropdown
interface DropdownOption {
  label: string
  value: string
}

// Định nghĩa kiểu dữ liệu cho props của component DropdownPicker
interface DropdownPickerProps {
  options: DropdownOption[]
  defaultValue?: string
  onSelect: (value: string) => void
  label?: string
  icon?: ImageSourcePropType
}

/**
 * Component Input with dropdown picker
 * @param options List of options
 * @param defaultValue Default value
 * @param onSelect Callback when select an option
 * @param label Label of dropdown
 * @param icon Icon of dropdown
 */
const InputDropdown: React.FC<DropdownPickerProps> = ({
  options,
  defaultValue,
  onSelect,
  label,
  icon,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  )
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        data={options}
        labelField="label"
        valueField="value"
        placeholder={label}
        value={label}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => handleValueChange(item.value)}
        renderRightIcon={() => (
          <AntDesign name="down" size={20} style={styles.dropicon} />
        )}
        renderLeftIcon={
          icon ? () => <Image source={icon} style={styles.icon} /> : undefined
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
  },
  icon: {
    borderRadius: 50,
    width: "2.5%",
    height: "135%",
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  dropdown: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#ebebeb",
  },
  dropicon: {
    color: "black",
    marginRight: 10,
  },
})

export default InputDropdown
