import {
  StyleSheet,
  View,
  Text,
  FlatList,
  LayoutChangeEvent,
} from "react-native"
import { handleImageUrlType, useImageSize } from "../../helpers/imageUtils"
import { useState } from "react"
import ImageContainer from "./ImageContainer"

/**
 *`SuggestBar` is a React Native component that displays a horizontally scrollable list of suggested images.
 * @param {ImageType} image - (Currently unused) Optional image data passed as a prop.
 */
const SuggestBar: React.FC<ImageType> = (image) => {
  const [barSize, setBarSize] = useState({ width: 0, height: 0 })

  const handleSize = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setBarSize({ width, height })
  }

  const houseImages = [
    {
      id: "1",
      categories: ["Nature"],
      date: new Date("2025-03-28"),
      loves: 95,
      info: {
        owner: {
          id: "1",
          name: "Bob",
          email: "Bob205",
          avatar: "https://i.pravatar.cc/100?img=2",
          password: "1122",
        },
        name: "The house",
        prompt:
          "Photo cute kawaii house 3d render illustration in pastel colors",
      },
      uri: "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6206.jpg?w=360",
    },
    {
      id: "2",
      categories: ["Nature"],
      date: new Date("2025-03-28"),
      loves: 95,
      info: {
        owner: {
          id: "2",
          name: "Boba",
          email: "Bob205",
          avatar: "https://i.pravatar.cc/100?img=2",
          password: "1122",
        },
        name: "The house dar",
        prompt: "Photo  house 3d render illustration in pastel colors",
      },
      uri: "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6197.jpg?w=360",
    },
    {
      id: "3",
      categories: ["Nature"],
      date: new Date("2025-03-28"),
      loves: 951,
      info: {
        owner: {
          id: "34",
          name: "Beb",
          email: "Bob201",
          avatar: "https://i.pravatar.cc/100?img=2",
          password: "1122",
        },
        name: "The house",
        prompt: "Photo cute kawaii house 3d render pastel colors",
      },
      uri: "https://img.freepik.com/premium-photo/cute-kawaii-house-3d-render-illustration-pastel-colors_691560-6202.jpg?w=360",
    },
    {
      id: "4",
      categories: ["Nature"],
      date: new Date("2025-03-28"),
      loves: 195,
      info: {
        owner: {
          id: "4",
          name: "Bob hun",
          email: "Bob205",
          avatar: "https://i.pravatar.cc/100?img=2",
          password: "1122",
        },
        name: "The house",
        prompt: "Photo  house 3d render illustration in  colors",
      },
      uri: "https://img.freepik.com/premium-photo/cute-home-with-lgbt-flag-colors-3d-render-illustration_691560-6059.jpg?w=360",
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You might also like</Text>
      <View style={styles.contentBox} onLayout={handleSize}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={houseImages}
          renderItem={({ item }) => (
            <View
              style={{
                width: barSize.height,
                marginHorizontal: 5,
                maxHeight: barSize.height,
              }}
            >
              <ImageContainer
                uri={item.uri}
                showInfo={false}
                id={item.id}
                date={item.date}
                info={item.info}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { width: "100%", paddingHorizontal: 10, height: "100%" },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  contentBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "90%",
    borderRadius: 10,
    marginTop: 10,
  },
})

export default SuggestBar
