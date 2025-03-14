import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import React from "react"
import Cup from "../../../assets/images/canvas/cup.png"
import Nut from "../../../assets/images/canvas/nut.png"
import IceCream from "../../../assets/images/canvas/iceCream.png"
import Cute from "../../../assets/images/canvas/cute.png"
import Feather from "@expo/vector-icons/Feather"
import Ionicons from "@expo/vector-icons/Ionicons"

const ImageCanvas: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {/* First row */}
      <View style={[styles.row, { marginTop: 60 }]}>
        <Image source={Cup} style={styles.image} />
        <Image source={Nut} style={styles.image} />
      </View>

      {/* Second row */}
      <View style={styles.row}>
        <Image source={IceCream} style={styles.image} />
        <Image source={Cute} style={styles.image} />
      </View>

      {/* Last row */}
      <View style={styles.describeBox}>
        <Ionicons
          name="sparkles"
          size={24}
          color="#7B7B7B"
          style={styles.icon}
        />
        <Text style={styles.text}>Describe the image you want to generate</Text>
        <Feather name="send" size={24} color="#7B7B7B" style={styles.icon} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  row: {
    flexDirection: "row" as const,
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  describeBox: {
    flexDirection: "row" as const,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 570,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C5A3FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    color: "#7B7B7B",
    fontSize: 16,
  },
})

export default ImageCanvas
