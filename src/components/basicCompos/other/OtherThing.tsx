import React from "react"
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native"
import { AntDesign, Feather } from "@expo/vector-icons"
import Logo from "../../../assets/image/icons/image1.png"
import Image7 from "../../../assets/image/icons/image7.png"
import Image8 from "../../../assets/image/icons/image8.png"
import Image9 from "../../../assets/image/icons/image9.png"
import Image10 from "../../../assets/image/icons/image10.png"
import Slider from "@react-native-community/slider"

const OtherThing: React.FC = () => {
  const [aspectRatio, setAspectRatio] = React.useState<number>(50)

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Phần hình ảnh trên cùng */}
      <Image source={Image7} style={styles.topImage} />
      <Image source={Image8} style={styles.topImagez} />

      {/* Phần profile */}
      <View style={styles.profileSection}>
        <Image source={Image9} style={styles.profileImage} />
        <View style={styles.profile}>
          <Text style={styles.profileName}>Audrey Simmons</Text>
          <Text style={styles.profileDesc}>Stunning!</Text>
        </View>
      </View>

      {/* Card folder */}
      <View style={styles.card}>
        <View style={styles.rowFirst}>
          <Feather
            name="folder"
            size={48}
            color="#5DB0EF"
            style={styles.folder}
          />
          <Feather name="more-horizontal" size={24} color="gray" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Name</Text>
          <Text style={styles.cardSubtitle}>32 Files</Text>
        </View>
      </View>
      <View style={styles.circle}>
        <AntDesign name="left" size={24} color="black" />
      </View>
      {/* New Design */}
      <View style={styles.newDesignSection}>
        <View style={styles.circle}>
          <AntDesign name="edit" size={24} color="black" />
        </View>
        <Text style={styles.newDesignText}>New Design</Text>
        <TouchableOpacity>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Name Section */}
      <View style={styles.cardTwo}>
        <Image source={Image10} style={styles.iconImage} />
        <View style={styles.textT}>
          <Text style={styles.cardTitle}>Name</Text>
          <Text style={styles.kilo}>94 Kb</Text>
        </View>

        <TouchableOpacity>
          <AntDesign
            name="close"
            size={24}
            color="gray"
            style={styles.closeButton}
          />
        </TouchableOpacity>
      </View>

      {/* Empty Box */}
      <View style={styles.card}></View>
      <Text style={styles.emptyText}>Poster</Text>
      <Text style={styles.editText}>Edited 3 days ago</Text>
      {/* Logo ở cuối */}
      <Image source={Logo} style={styles.bottomImage} />
    </ScrollView>
  )
}

export default OtherThing

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    alignSelf: "center",
  },
  content: {
    
  },
  topImage: {
    height: 64,
    width: 64,
    marginBottom: 20,
  },
  topImagez: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  profile: {
    flexDirection: "column",
    marginLeft: 10,
  },
  profileSection: {
    marginBottom: 20,
    flexDirection: "row",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 25,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  profileDesc: {
    fontSize: 12,
    color: "gray",
  },
  card: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    elevation: 3,
    height: 130,
    width: 230,
  },
  rowFirst: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  folder: {
    marginTop: 8,
  },
  cardText: {
    flex: 1,
    marginLeft: 8,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 10,
    color: "gray",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 13,
  },
  newDesignSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EBE7FE",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
    width: 250,
    height: 80,
  },
  newDesignText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  cardTwo: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    elevation: 3,
    height: 50,
    width: 210,
  },
  textT: {
    marginLeft: 8,
    marginRight: 70,
    flexDirection: "column",
  },
  kilo: {
    fontSize: 12,
    color: "gray",
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: 8,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  editText: {
    fontSize: 12,
    color: "gray",
  },
  closeButton: {
    justifyContent: "center",
    marginRight: 5,
  },
  aspectRatioSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 8,
  },
  aspectRatioLabel: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
  },
  aspectRatioIcon: {
    marginLeft: 8,
  },
  slider: {
    width: "100%",
    height: 40,
    marginVertical: 8,
  },
  bottomImage: {
    height: 40,
    width: 40,
  },
})