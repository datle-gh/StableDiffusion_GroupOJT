import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/image/icons/image1.png";
import Avatar from "../../../assets/image/icons/image6.png";

const MenuTopTwo: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Bên trái */}
      <View style={styles.leftContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.aiImageText}>AI Image</Text>
      </View>

      {/* Bên phải */}
      <View style={styles.rightContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput placeholder="Search files" style={styles.searchInput} />
        </View>

        <TouchableOpacity style={styles.marginRight}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.marginRight}>
          <Feather name="settings" size={20} color="black" style={styles.icon}/>
        </TouchableOpacity>

        <Image source={Avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#E8E8E8",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  aiImageText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 35,
    width: 250,
    marginRight: 50,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    fontSize: 15,
    color: "#000",
    width: 200,
    height: 25,
    borderWidth: 0,
    textDecorationLine: "none",
    fontFamily: "Arial",
  },
  icon: {
    marginHorizontal: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  marginRight: {
    marginRight: 30,
  }
});

export default MenuTopTwo;