import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Image24 from "../../../assets/aiToolImage/image24.png";
import Image25 from "../../../assets/aiToolImage/image25.png";
import Image26 from "../../../assets/aiToolImage/image26.png";
import Image27 from "../../../assets/aiToolImage/image27.png";
import Image28 from "../../../assets/aiToolImage/image28.png";
import Image29 from "../../../assets/aiToolImage/image29.png";
import Image30 from "../../../assets/aiToolImage/image30.png";
import Image31 from "../../../assets/aiToolImage/image31.png";
import Image32 from "../../../assets/aiToolImage/image32.png";

const LayerTool: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const imageArray: ImageSourcePropType[] = [Image27, Image28, Image29, Image30, Image31];

  return (
    <View style={styles.container}>
      <Text style={styles.layerText}>Layer</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {[Image24, Image25].map((img, index) => (
          <View key={index} style={styles.imageContainerLarge}>
            <AntDesign name="right" size={24} color="#444" style={styles.icon} />
            <View style={styles.imageContainer}>
              <Image source={img} style={styles.image} />
            </View>
          </View>
        ))}

        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <View style={styles.imageContainerLarge}>
            <AntDesign 
              name={isExpanded ? "down" : "right"} 
              size={24} 
              color="#444" 
              style={styles.icon} 
            />
            <View style={styles.imageContainer}>
              <Image source={Image26} style={styles.image} />
            </View>
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedContainer}>
            {imageArray.map((img, index, array) => (
              <View key={index} style={styles.row}>
                {/* Đường thẳng nối liền */}
                {index !== array.length  && <View style={styles.verticalLine} />}
                <View style={styles.horizontalLine} />
                <View style={styles.imageContainerSmall}>
                  <Image source={img} style={styles.image} />
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={[styles.imageContainerLarge, { marginBottom: 250 }]}>
          <AntDesign name="right" size={24} color="#444" style={styles.icon} />
          <View style={styles.imageContainer}>
            <Image source={Image32} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LayerTool;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: 280,
  },
  layerText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  imageContainerLarge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  imageContainer: {
    height: 100,
    width: 190,
    borderRadius: 8,
    backgroundColor: "#ECECEC",
    marginLeft: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  expandedContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    position: "relative",
  },
  verticalLine: {
    width: 2,
    height: 70,
    backgroundColor: "#000",
    position: "absolute",
    left: -10,
    top: 0,
  },
  horizontalLine: {
    width: 20,
    height: 2,
    backgroundColor: "#000",
    marginRight: 5,
  },
  imageContainerSmall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECECEC",
    height: 70,
    width: 168,
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  icon: {
    marginLeft: 5,
    color: "#444",
  },
});