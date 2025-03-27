import React, { useState } from "react"
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  LayoutChangeEvent,
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { RFPercentage } from "react-native-responsive-fontsize"

interface DashboardButtonProps {
  title: string
  icon: ImageSourcePropType
  color: string
  onPress: () => void
}

/**
 * DashboardButton component
 *
 * A customizable button used in a dashboard, displaying an icon, title, and a plus ("+") icon.
 * @param {string} title - The title text displayed on the button.
 * @param {ImageSourcePropType} icon - The image source for the icon shown to the left of the title.
 * @param {string} color - The background color of the button.
 * @param {() => void} onPress - Callback function triggered when the button is pressed.
 *
 */
const DashboardButton: React.FC<DashboardButtonProps> = (button) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  return (
    <TouchableOpacity
      onLayout={onLayout}
      style={[styles.buttonContainer, { backgroundColor: button.color }]}
      onPress={button.onPress}
    >
      <View style={styles.infoBtn}>
        <View style={[styles.backgroundIcon, { width: size.width * 0.2 }]}>
          <Image
            source={button.icon}
            style={{ width: size.width * 0.1, height: size.width * 0.1 }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>{button.title}</Text>
      </View>

      <MaterialCommunityIcons name="plus" size={size.width * 0.1} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  infoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundIcon: {
    backgroundColor: "white",
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: RFPercentage(1.3), marginLeft: 10 },
})

export default DashboardButton
