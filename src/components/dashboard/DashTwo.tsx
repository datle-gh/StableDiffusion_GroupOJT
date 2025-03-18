import React, { useState } from "react"
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

interface Category {
  name: string
}

interface Filter {
  name: string
  icon: string
}

interface GridImage {
  uri: string | number
  height: number
  text?: {
    title: string
    date: string
    description: string
  }
}

const categories: Category[] = [
  { name: "3D Renders" },
  { name: "Nature" },
  { name: "Travel" },
  { name: "Animals" },
  { name: "People" },
  { name: "Food & Drink" },
  { name: "Arts & Culture" },
]

const filters: Filter[] = [
  { name: "Recent", icon: "clock" },
  { name: "Hot", icon: "fire" },
]

const gridData: GridImage[][] = [
  [
    {
      uri: "https://img.freepik.com/premium-photo/display-beauty-products-with-bottle-liquid-shelf_192217-624.jpg?w=360",
      height: 500,
    },
    {
      uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMV9zYXR1cm5faW5fdGhlX3N0eWxlX29mX3Bhc3RlbF9kcmVhbXlfY2hhcm1pbmdfd19hNTM4MGNkYi00ZGNmLTQzODYtYWEyZS03YzZlZDczNjI3ODRfMi5qcGc.jpg",
      height: 300,
    },
    {
      uri: "https://img.freepik.com/premium-photo/hand-hold-like-button-icon-social-media-sign-chat-application-technology-community-background-banner-concept-3d-cartoon-illustration_56104-1740.jpg?w=360",
      height: 280,
    },
  ],
  [
    {
      uri: require("../../../assets/images/3d-renders/house.jpg"),
      height: 330,
    },
    { uri: require("../../../assets/images/3d-renders/tree.jpg"), height: 300 },
    {
      uri: require("../../../assets/images/3d-renders/ballon.jpg"),
      height: 400,
    },
  ],
  [
    {
      uri: "https://img.freepik.com/free-photo/easter-decorative-eggs-arrangement_23-2150245764.jpg",
      height: 450,
      text: {
        title: "Helen",
        date: "02.03.2023",
        description: "Save, share and use your image however you please.",
      },
    },
    {
      uri: "https://img.freepik.com/foto-premium/un-illustrazione-digitale-di-uno-stand-gastronomico-mco_852323-60.jpg",
      height: 300,
    },
    { uri: require("../../../assets/images/3d-renders/tank.jpg"), height: 280 },
  ],
  [
    {
      uri: require("../../../assets/images/3d-renders/monkey.jpg"),
      height: 300,
    },
    {
      uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg",
      height: 250,
    },
    {
      uri: "https://cdn.prod.website-files.com/61854e3ef69d07a1f22d8d6f/62278e0a0810f907e2d24955_instant-win-wink.jpg",
      height: 240,
    },
    {
      uri: "https://img.freepik.com/free-photo/fantasy-landscape-with-gradient-cube_23-2149312128.jpg",
      height: 280,
    },
  ],
]

const DashTwo: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Recent")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}
          >
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => setSelectedCategory(item.name)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item.name ? styles.boldText : null,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.filterWrapper}>
            <View style={styles.filterContainer}>
              {filters.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => setSelectedFilter(item.name)}
                  style={[
                    styles.filterButton,
                    selectedFilter === item.name && styles.activeFilterButton,
                  ]}
                >
                  <FontAwesome5
                    name={item.icon}
                    size={14}
                    color="black"
                    style={styles.icon}
                  />
                  <Text style={styles.filterText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {gridData.map((column, columnIndex) => (
            <View key={columnIndex} style={styles.column}>
              {column.map((image, imageIndex) => (
                <View key={imageIndex} style={{ position: "relative" }}>
                  <Image
                    source={
                      typeof image.uri === "string"
                        ? { uri: image.uri }
                        : image.uri
                    }
                    style={{
                      width: "100%",
                      height: image.height,
                      borderRadius: 12,
                      marginBottom: 20,
                    }}
                    resizeMode="cover"
                  />
                  {image.text && (
                    <View style={styles.overlay}>
                      <View style={styles.overlayContainer}>
                        <Image
                          source={{
                            uri: "https://static.univid.io/profile/toyfaces/coloredbg/ToyFaces_Colored_BG_63.jpg",
                          }}
                          style={styles.overlayImage}
                        />
                        <Text style={styles.overlayTitle}>
                          {image.text.title}
                        </Text>
                        <Text style={styles.overlayDate}>
                          {image.text.date}
                        </Text>
                      </View>

                      <Text style={styles.overlayDescription}>
                        {image.text.description}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 0 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    marginLeft: 20,
  },
  categoryContainer: { flexDirection: "row", flex: 1 },
  categoryButton: { paddingHorizontal: 10, paddingVertical: 5 },
  categoryText: { fontSize: 16, color: "#333" },
  boldText: { fontWeight: "bold", color: "#000000" },
  filterWrapper: {
    alignItems: "flex-end",
    paddingRight: 10,
    paddingTop: 5,
  },
  filterContainer: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    padding: 5,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  activeFilterButton: { backgroundColor: "white" },
  filterText: { marginLeft: 5, color: "#333" },
  filterIcon: { marginRight: 5 },
  icon: { marginRight: 5 },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 20,
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
  },
  overlayContainer: { flexDirection: "row" },
  overlayImage: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight: 5,
  },
  overlayTitle: { color: "black", fontWeight: "bold", fontSize: 16 },
  overlayDate: { color: "black", fontSize: 14, marginLeft: 150 },
  overlayDescription: { color: "black", fontSize: 14 },
})

export default DashTwo
