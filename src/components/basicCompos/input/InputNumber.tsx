import React from "react"
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native"

interface NumberInputProps {
  icon: ImageSourcePropType
  value: string
  onChange: (text: string) => void
  showPercentage?: boolean
}

/**
 * Component Input number in percentage or not percentage
 * @param icon Icon of input
 * @param value Value of input
 * @param onChange Callback when input change
 * @param showPercentage Show percentage or not
 * @returns
 */
const InputNumber: React.FC<NumberInputProps> = ({
  icon,
  value,
  onChange,
  showPercentage = false,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder="0"
      />
      {showPercentage && <Text style={styles.percentage}>%</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9d7d7",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginLeft: 10,
    width: "12%",
    height: "42%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    flex: 0.6,
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
    width: "60%",
    marginLeft: 10,
  },
  percentage: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
})

export default InputNumber
