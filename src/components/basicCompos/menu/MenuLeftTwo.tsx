import React from "react";
import { StyleSheet, View, Text, ViewStyle, TextStyle } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const MenuLeftTwo: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Group 1 */}
      <View style={styles.menuColumn}>
        <View style={styles.menuItem}>
          <AntDesign name="home" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome name="safari" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Discovery</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="folder" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>My Project</Text>
        </View>
      </View>
      
      {/* Divider */}
      <View style={styles.divider} />
      
      {/* Group 2 */}
      <View style={styles.menuColumn}>
        <View style={styles.menuItem}>
          <Feather name="trash-2" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Trash</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="settings" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.menuItem}>
          <FontAwesome6 name="question-circle" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Get Help</Text>
        </View>
      </View>
      
      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <FontAwesome6 name="gem" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "flex-start",
  },
  menuColumn: {
    flexDirection:"column",
    marginLeft:10,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    width: 80,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  bottomSection: {
    width: 80,
    height: 60,
    borderRadius: 14,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignSelf: "flex-start",
    marginTop: 150,
  },
});

export default MenuLeftTwo;