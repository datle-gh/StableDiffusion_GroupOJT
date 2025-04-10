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
      owner: {
        id: "1",
        email: "Alice205",
        avatar: "https://i.pravatar.cc/100?img=1",
        name: "Alice",
        password: "1122",
      },
      name: "Bottle liquid",
      prompt: "Display beauty products with bottle liquid shelf",
    },
    categories: ["Nature"],
    loves: 120,
    date: new Date("2025-03-30"),
  },
  {
    id: "2",
    uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMV9zYXR1cm5faW5fdGhlX3N0eWxlX29mX3Bhc3RlbF9kcmVhbV9jaGFybWluZ19fd19hNTM4MGNkYi00ZGNmLTQzODYtYWEyZS03YzZlZDczNjI3ODRfMi5qcGc.jpg",
    info: {
      owner: {
        id: "223",
        email: "Bob205",
        avatar: "https://i.pravatar.cc/100?img=2",
        name: "Bob",
        password: "112222",
      },
      name: "Gof slurry",
      prompt: "Gof slurry with a 3D render of a cartoon character",
    },
    categories: ["Arts & Culture"],
    loves: 95,
    date: new Date("2025-03-28"),
  },
  {
    id: "3",
    uri: "https://img.freepik.com/premium-photo/hand-hold-like-button-icon-social-media-sign-chat-application-technology-community-background-banner-concept-3d-cartoon-illustration_56104-1740.jpg?w=360",
    info: {
      owner: {
        id: "3",
        email: "charlie@example.com",
        avatar: "https://i.pravatar.cc/100?img=3",
        name: "Charlie",
        password: "1234",
      },
      name: "Like Button",
      prompt: "Social media 3D cartoon style hand holding like icon",
    },
    categories: ["3D Renders", "Arts & Culture"],
    loves: 210,
    date: new Date("2025-03-25"),
  },
  {
    id: "4",
    uri: require("../../../assets/images/3d-renders/house.jpg"),
    info: {
      owner: {
        id: "4",
        email: "daisy@example.com",
        avatar: "https://i.pravatar.cc/100?img=4",
        name: "Daisy",
        password: "1234",
      },
      name: "Dream House",
      prompt: "3D render of a cozy house in pastel tones",
    },
    categories: ["3D Renders"],
    loves: 80,
    date: new Date("2025-03-20"),
  },
  {
    id: "5",
    uri: require("../../../assets/images/3d-renders/tree.jpg"),
    info: {
      owner: {
        id: "5",
        email: "evan@example.com",
        avatar: "https://i.pravatar.cc/100?img=5",
        name: "Evan",
        password: "1234",
      },
      name: "Stylized Tree",
      prompt: "A stylized 3D render of a tree in low poly design",
    },
    categories: ["3D Renders", "Nature"],
    loves: 60,
    date: new Date("2025-03-22"),
  },
  {
    id: "6",
    uri: aiinputimage,
    info: {
      owner: {
        id: "6",
        email: "fiona@example.com",
        avatar: "https://i.pravatar.cc/100?img=6",
        name: "Fiona",
        password: "1234",
      },
      name: "AI Input Scene",
      prompt: "Generated image representing AI input concept",
    },
    categories: ["3D Renders", "Travel"],
    loves: 102,
    date: new Date("2025-03-27"),
  },
  {
    id: "7",
    uri: "https://img.freepik.com/free-photo/easter-decorative-eggs-arrangement_23-2150245764.jpg",
    info: {
      owner: {
        id: "7",
        email: "george@example.com",
        avatar: "https://i.pravatar.cc/100?img=7",
        name: "George",
        password: "1234",
      },
      name: "Easter Eggs",
      prompt: "Colorful 3D render of Easter eggs arrangement",
    },
    categories: ["3D Renders", "Travel", "Nature"],
    loves: 75,
    date: new Date("2025-03-15"),
  },
  {
    id: "8",
    uri: "https://img.freepik.com/foto-premium/un-illustrazione-digitale-di-uno-stand-gastronomico-mco_852323-60.jpg",
    info: {
      owner: {
        id: "8",
        email: "hana@example.com",
        avatar: "https://i.pravatar.cc/100?img=8",
        name: "Hana",
        password: "1234",
      },
      name: "Food Stand",
      prompt: "Digital illustration of a colorful food stand",
    },
    categories: ["Food & Drink", "Arts & Culture"],
    loves: 88,
    date: new Date("2025-03-17"),
  },
  {
    id: "9",
    uri: require("../../../assets/images/3d-renders/tank.jpg"),
    info: {
      owner: {
        id: "9",
        email: "isaac@example.com",
        avatar: "https://i.pravatar.cc/100?img=9",
        name: "Isaac",
        password: "1234",
      },
      name: "Mini Tank",
      prompt: "3D cartoon tank with detailed texture",
    },
    categories: ["3D Renders"],
    loves: 64,
    date: new Date("2025-03-29"),
  },
  {
    id: "10",
    uri: require("../../../assets/images/3d-renders/monkey.jpg"),
    info: {
      owner: {
        id: "10",
        email: "jenny@example.com",
        avatar: "https://i.pravatar.cc/100?img=10",
        name: "Jenny",
        password: "1234",
      },
      name: "Funny Monkey",
      prompt: "Cute 3D monkey character in jungle environment",
    },
    categories: ["Animals", "3D Renders"],
    loves: 109,
    date: new Date("2025-03-18"),
  },
  {
    id: "11",
    uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg",
    info: {
      owner: {
        id: "11",
        email: "ken@example.com",
        avatar: "https://i.pravatar.cc/100?img=11",
        name: "Ken",
        password: "1234",
      },
      name: "Asian Cartoon",
      prompt: "AI generated cartoon style Chinese background",
    },
    categories: ["Arts & Culture"],
    loves: 95,
    date: new Date("2025-03-16"),
  },
  {
    id: "12",
    uri: "https://cdn.prod.website-files.com/61854e3ef69d07a1f22d8d6f/62278e0a0810f907e2d24955_instant-win-wink.jpg",
    info: {
      owner: {
        id: "12",
        email: "lily@example.com",
        avatar: "https://i.pravatar.cc/100?img=12",
        name: "Lily",
        password: "1234",
      },
      name: "Instant Win",
      prompt: "Colorful 3D cartoon girl with winning pose",
    },
    categories: ["Arts & Culture"],
    loves: 140,
    date: new Date("2025-03-21"),
  },
  {
    id: "13",
    uri: "https://img.freepik.com/free-photo/fantasy-landscape-with-gradient-cube_23-2149312128.jpg",
    info: {
      owner: {
        id: "13",
        email: "mike@example.com",
        avatar: "https://i.pravatar.cc/100?img=13",
        name: "Mike",
        password: "1234",
      },
      name: "Fantasy Cube",
      prompt: "Fantasy landscape with gradient cube floating in space",
    },
    categories: ["3D Renders", "Arts & Culture"],
    loves: 132,
    date: new Date("2025-03-26"),
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
              <ImageContainer
                uri={item.uri}
                info={item.info}
                id={item.id}
                date={item.date}
              />
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
