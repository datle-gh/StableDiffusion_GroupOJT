import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native"

interface FrameButtonProps {
  index: number
  imageUrl: ImageSourcePropType
  label: string
  isSelected: boolean
  onPress: (index: number) => void
}

/**
 * Frame 596 component
 * @param index - index of the frame
 * @param imageUrl - image url of the frame
 * @param label - label of the frame
 * @param isSelected - is frame selected
 * @param onPress - function to handle press event
 */
const FrameButton: React.FC<FrameButtonProps> = ({
  index,
  imageUrl,
  label,
  isSelected,
  onPress,
}) => {
  const handlePress = () => {
    onPress(index)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.menuItem, isSelected && styles.highlightedItem]}
        onPress={handlePress}
      >
        <Image source={imageUrl} style={styles.inputIcon} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "transparent",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 12,
    width: "100%",
  },
  highlightedItem: {
    backgroundColor: "#e1dfdfaa",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
})

export default FrameButton
