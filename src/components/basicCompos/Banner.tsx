import { StyleSheet, View, Image, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import Background from "../../../assets/dashboardImage/background.png"
import { RFPercentage } from "react-native-responsive-fontsize"
import { useState } from "react"

/**
 * Banner component
 * @description component for the banner section on top of the DashboardMain component
 */
const Banner = () => {
  const [parentWidth, setParentWidth] = useState(0)

  return (
    <View style={styles.backgroundSection}>
      <Image source={Background} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        {/* Icon and circle */}
        <View
          style={styles.circle}
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout
            setParentWidth(width)
          }}
        >
          <Ionicons name="sparkles" size={parentWidth * 0.3} color="black" />
        </View>

        {/* Text */}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>
            Visualize your design ideas with AI Image
          </Text>
          <Text style={styles.subtitle}>
            Turn inspiration into design in no time. Simply upload an image and
            Magic Design™ will whip up a curated selection of templates just for
            you.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundSection: {
    marginBottom: 20,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  overlay: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginLeft: 30,
  },
  circle: {
    backgroundColor: "#FFFFFF",
    height: "120%",
    aspectRatio: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 16,
  },
  textWrapper: { flex: 10 },
  title: {
    fontSize: RFPercentage(1.5),
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  subtitle: { fontSize: 14, color: "#555" },
})

export default Banner
