import React, { useState } from "react"
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native"
import AiImage from "../../../assets/images/ai-image/AiImage.png"

interface ImageItem {
  id: string
  source: ImageSourcePropType
}

const images: ImageItem[] = [
  { id: "1", source: AiImage },
  { id: "2", source: AiImage },
  { id: "3", source: AiImage },
  { id: "4", source: AiImage },
  { id: "5", source: AiImage },
  { id: "6", source: AiImage },
  { id: "7", source: AiImage },
  { id: "8", source: AiImage },
  { id: "9", source: AiImage },
]

const AiImageTool: React.FC = () => {
  const [search, setSearch] = useState<string>("")

  const filteredImages = images.filter((img) => img.id.includes(search))

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI Image</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredImages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#EAEAEA",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "#A8A8A8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
})

export default AiImageTool
