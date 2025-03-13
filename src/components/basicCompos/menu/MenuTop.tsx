import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Logo from "../../../assets/image/icons/image1.png";
import Image2 from "../../../assets/image/icons/image2.png";
import Image3 from "../../../assets/image/icons/image3.png";
import Image4 from "../../../assets/image/icons/image4.png";
import Image5 from "../../../assets/image/icons/image5.png";
import Avatar from "../../../assets/image/icons/image6.png";

interface Option {
  key: string;
  label: string;
  image: any;
}

interface Styles {
  container: ViewStyle;
  leftContainer: ViewStyle;
  leftSection: ViewStyle;
  logo: ImageStyle;
  projectName: TextStyle;
  iconLeft: ViewStyle;
  rightSection: ViewStyle;
  topRow: ViewStyle;
  picker: ViewStyle;
  exportButton: ViewStyle;
  exportText: TextStyle;
  avatar: ImageStyle;
  optionButton: ViewStyle;
  selectedOption: ViewStyle;
  optionImage: ImageStyle;
  optionText: TextStyle;
  selectedButton: ViewStyle;
}

const MenuTop: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<string>("50%");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const options: Option[] = [
    { key: "img2", label: "Upscale", image: Image2 },
    { key: "img3", label: "Adjust", image: Image3 },
    { key: "img4", label: "Eraser", image: Image4 },
    { key: "img5", label: "Extend", image: Image5 },
  ];

  const handleOptionPress = (key: string): void => {
    setSelectedOption(selectedOption === key ? null : key);
  };

  const handleIconPress = (icon: string): void => {
    setSelectedIcon(icon === selectedIcon ? null : icon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.leftSection}>
          <Image source={Logo} style={styles.logo} />
          <AntDesign name="left" size={20} color="black" style={styles.iconLeft} />
          <Text style={styles.projectName}>Project name</Text>
          <TouchableOpacity
            style={[styles.iconLeft, selectedIcon === "click" && styles.selectedButton]}
            onPress={() => handleIconPress("click")}
          >
            <MaterialCommunityIcons name="cursor-default-click-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconLeft, selectedIcon === "stack" && styles.selectedButton]}
            onPress={() => handleIconPress("stack")}
          >
            <Octicons name="stack" size={20} color="black" />
          </TouchableOpacity>
          <MaterialCommunityIcons name="arrow-left-top" size={22} color="black" style={styles.iconLeft} />
          <MaterialCommunityIcons name="arrow-right-top" size={22} color="black" style={styles.iconLeft} />
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.topRow}>
          {options.map(({ key, label, image }) => (
            <TouchableOpacity
              key={key}
              style={[styles.optionButton, selectedOption === key && styles.selectedOption]}
              onPress={() => handleOptionPress(key)}
            >
              <Image source={image} style={styles.optionImage} />
              <Text style={styles.optionText}>{label}</Text>
            </TouchableOpacity>
          ))}
          <Picker
            selectedValue={zoomLevel}
            style={styles.picker}
            onValueChange={(itemValue: string) => setZoomLevel(itemValue)}
          >
            <Picker.Item label="10%" value="10%" />
            <Picker.Item label="25%" value="25%" />
            <Picker.Item label="50%" value="50%" />
            <Picker.Item label="75%" value="75%" />
            <Picker.Item label="100%" value="100%" />
          </Picker>
          <TouchableOpacity style={styles.exportButton}>
            <Feather name="download" size={24} color="white" />
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
          <Image source={Avatar} style={styles.avatar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
  },
  projectName: {
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
    marginRight: 20,
  },
  iconLeft: {
    marginRight: 20,
  },
  rightSection: {
    flexDirection: "column",
    alignItems: "flex-end",
    height: 70,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: 100,
    marginRight: 10,
  },
  exportButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    height: 35,
  },
  exportText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#8a8a8a",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: "white",
  },
  optionImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 5,
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  selectedButton: {
    backgroundColor: "white",
  },
});

export default MenuTop;