import React, { useState } from "react"
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native"
import StatusFilterEditor from "../basicCompos/bigEditor/StatusFilterEditor"
import CategoryFilter from "../basicCompos/CategoryFilter"
import { MasonryFlashList } from "@shopify/flash-list"
import ImageContainer from "../basicCompos/ImageContainer"
import aiinputimage from "../../../assets/images/AiInputImage.png"
import { RFPercentage } from "react-native-responsive-fontsize"

const gridData: ImageType[] = [
  {
    id: "1",
    uri: "https://img.freepik.com/premium-photo/display-beauty-products-with-bottle-liquid-shelf_192217-624.jpg?w=360",
    info: {
      avatar: "https://i.pravatar.cc/100?img=1",
      author: "Alice",
      date: new Date("2025-03-30"),
    },
    categories: ["Nature"],
    loves: 120,
  },
  {
    id: "2",
    uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMV9zYXR1cm5faW5fdGhlX3N0eWxlX29mX3Bhc3RlbF9kcmVhbV9jaGFybWluZ19fd19hNTM4MGNkYi00ZGNmLTQzODYtYWEyZS03YzZlZDczNjI3ODRfMi5qcGc.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=2",
      author: "Bob",
      date: new Date("2025-03-28"),
    },
    categories: ["Arts & Culture"],
    loves: 95,
  },
  {
    id: "3",
    uri: "https://img.freepik.com/premium-photo/hand-hold-like-button-icon-social-media-sign-chat-application-technology-community-background-banner-concept-3d-cartoon-illustration_56104-1740.jpg?w=360",
    info: {
      avatar: "https://i.pravatar.cc/100?img=3",
      author: "Charlie",
      date: new Date("2025-03-25"),
    },
    categories: ["3D Renders", "Arts & Culture"],
    loves: 210,
  },
  {
    id: "4",
    uri: require("../../../assets/images/3d-renders/house.jpg"),
    info: {
      avatar: "https://i.pravatar.cc/100?img=4",
      author: "Daisy",
      date: new Date("2025-03-20"),
    },
    categories: ["3D Renders"],
    loves: 80,
  },
  {
    id: "5",
    uri: require("../../../assets/images/3d-renders/tree.jpg"),
    info: {
      avatar: "https://i.pravatar.cc/100?img=5",
      author: "Evan",
      date: new Date("2025-03-22"),
    },
    categories: ["3D Renders", "Nature"],
    loves: 60,
  },
  {
    id: "6",
    uri: aiinputimage,
    info: {
      avatar: "https://i.pravatar.cc/100?img=6",
      author: "Fiona",
      date: new Date("2025-03-27"),
    },
    categories: ["3D Renders", "Travel"],
    loves: 102,
  },
  {
    id: "7",
    uri: "https://img.freepik.com/free-photo/easter-decorative-eggs-arrangement_23-2150245764.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=7",
      author: "George",
      date: new Date("2025-03-15"),
    },
    categories: ["3D Renders", "Travel", "Nature"],
    loves: 75,
  },
  {
    id: "8",
    uri: "https://img.freepik.com/foto-premium/un-illustrazione-digitale-di-uno-stand-gastronomico-mco_852323-60.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=8",
      author: "Hana",
      date: new Date("2025-03-17"),
    },
    categories: ["Food & Drink", "Arts & Culture"],
    loves: 88,
  },
  {
    id: "9",
    uri: require("../../../assets/images/3d-renders/tank.jpg"),
    info: {
      avatar: "https://i.pravatar.cc/100?img=9",
      author: "Isaac",
      date: new Date("2025-03-29"),
    },
    categories: ["3D Renders"],
    loves: 64,
  },
  {
    id: "10",
    uri: require("../../../assets/images/3d-renders/monkey.jpg"),
    info: {
      avatar: "https://i.pravatar.cc/100?img=10",
      author: "Jenny",
      date: new Date("2025-03-18"),
    },
    categories: ["Animals", "3D Renders"],
    loves: 109,
  },
  {
    id: "11",
    uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=11",
      author: "Ken",
      date: new Date("2025-03-16"),
    },
    categories: ["Arts & Culture"],
    loves: 95,
  },
  {
    id: "12",
    uri: "https://cdn.prod.website-files.com/61854e3ef69d07a1f22d8d6f/62278e0a0810f907e2d24955_instant-win-wink.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=12",
      author: "Lily",
      date: new Date("2025-03-21"),
    },
    categories: ["Arts & Culture"],
    loves: 140,
  },
  {
    id: "13",
    uri: "https://img.freepik.com/free-photo/fantasy-landscape-with-gradient-cube_23-2149312128.jpg",
    info: {
      avatar: "https://i.pravatar.cc/100?img=13",
      author: "Mike",
      date: new Date("2025-03-26"),
    },
    categories: ["3D Renders", "Arts & Culture"],
    loves: 132,
  },
]

const DashTwo: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Recent")
  const [filteredData, setFilteredData] = useState<ImageType[]>(gridData)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          {/* Category filter */}
          <View>
            <CategoryFilter data={gridData} onFiltered={setFilteredData} />
          </View>

          {/* Status filter */}
          <View style={styles.filterWrapper}>
            <StatusFilterEditor onStatusChange={setSelectedFilter} />
          </View>
        </View>
        {/* Grid view */}
        <View style={styles.gridContainer}>
          <MasonryFlashList
            data={filteredData}
            numColumns={4}
            ListEmptyComponent={() => (
              <View
                style={{
                  marginTop: 50,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(1.6),
                    color: "black",
                  }}
                >
                  No images available
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <ImageContainer uri={item.uri} info={item.info} id={item.id} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  filterWrapper: {
    alignItems: "flex-end",
    width: "25%",
  },
  gridContainer: {},
  overlayDescription: { color: "black", fontSize: 14 },
})

export default DashTwo
